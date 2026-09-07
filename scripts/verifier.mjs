import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const dayPattern = /^day\d{2}$/;
const exercisePattern = /^exercice-\d{2}\.js$/;
const todoMarker = '// TODO: écris ta solution ici.';

function removeBlockComments(source) {
  let result = source;
  let start = result.indexOf('/*');

  while (start !== -1) {
    const end = result.indexOf('*/', start + 2);
    if (end === -1) return result.slice(0, start);
    result = result.slice(0, start) + result.slice(end + 2);
    start = result.indexOf('/*');
  }

  return result;
}

function hasCandidateCode(source) {
  return removeBlockComments(source)
    .split('\n')
    .some((rawLine) => {
      const line = rawLine.trim();
      return (
        line.length > 0 &&
        !line.startsWith('//') &&
        line !== "'use strict';" &&
        line !== '"use strict";'
      );
    });
}

const dayFolders = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && dayPattern.test(entry.name))
  .map((entry) => entry.name)
  .sort();

if (dayFolders.length === 0) {
  console.log('Aucune journée publiée dans ce dépôt pour le moment.');
  console.log('Le dépôt de base est prêt.');
  process.exit(0);
}

let total = 0;
let complete = 0;
let incomplete = 0;
let syntaxErrors = 0;
let missing = 0;

for (const day of dayFolders) {
  const guideDirectory = path.join(root, day, 'guides');
  const exerciseDirectory = path.join(root, day, 'exercices');
  const challengeFile = path.join(root, day, 'challenge', 'challenge.js');
  const expectedFiles = Array.from({ length: 3 }, (_, index) =>
    path.join(
      guideDirectory,
      'guide-' + String(index + 1).padStart(2, '0') + '.js',
    ),
  );
  expectedFiles.push(...Array.from({ length: 20 }, (_, index) =>
    path.join(
      exerciseDirectory,
      'exercice-' + String(index + 1).padStart(2, '0') + '.js',
    ),
  ));
  expectedFiles.push(challengeFile);

  let dayComplete = 0;
  console.log('\n' + day.toUpperCase());

  for (const file of expectedFiles) {
    total += 1;
    const relative = path.relative(root, file).replaceAll('\\', '/');

    if (!fs.existsSync(file)) {
      missing += 1;
      console.log('✗ Manquant : ' + relative);
      continue;
    }

    const source = fs.readFileSync(file, 'utf8');

    if (source.includes(todoMarker) || !hasCandidateCode(source)) {
      incomplete += 1;
      console.log('○ À faire  : ' + relative);
      continue;
    }

    try {
      new vm.Script(source, { filename: relative });
      complete += 1;
      dayComplete += 1;
      console.log('✓ Syntaxe  : ' + relative);
    } catch (error) {
      syntaxErrors += 1;
      console.log('✗ Syntaxe  : ' + relative);
      console.log('  ' + error.message);
    }
  }

  console.log('Progression ' + day + ' : ' + dayComplete + '/' + expectedFiles.length);
}

console.log('\nBILAN');
console.log('Fichiers vérifiés : ' + total);
console.log('Complétés         : ' + complete);
console.log('À faire           : ' + incomplete);
console.log('Manquants         : ' + missing);
console.log('Erreurs de syntaxe: ' + syntaxErrors);

if (incomplete > 0 || missing > 0 || syntaxErrors > 0) {
  process.exitCode = 1;
}
