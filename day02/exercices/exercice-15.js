/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LA PYRAMIDE DE MARIO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez dans la console une demi-pyramide d'étoiles de 5 lignes :
 *
 * - - -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day02/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let space = ' ';
let star = '*';
let base = ""
for (let i = 1; i <= 5; i++) {
    if (i === 1) {
        for (let j = 0; j < 5; j++) {
            base += space
        }
        base += star
        base += "\n"
    } else {

for (let j = 0; j <= 5 - i ; j++) {
    base += space
}

for (let k = 0; k < i  ; k++) {
    base += star
    
}
 base += "\n"
    }
}

console.log(base)

