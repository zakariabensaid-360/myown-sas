/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE CÉLÈBRE FIZZBUZZ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez un programme qui affiche les nombres de 1 à 50.
 * - Si le nombre est multiple de 3, affichez "Fizz".
 * - S'il est multiple de 5, affichez "Buzz".
 * - S'il est multiple de 3 ET de 5, affichez "FizzBuzz".
 * - Sinon, affichez le nombre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day02/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}