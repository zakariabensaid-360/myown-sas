/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RÉFRACTURATION (REFACTORING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Reprenez l'exercice du FizzBuzz du *Day 02* et encapsulez-le dans une fonction jouerFizzBuzz(max). En appelant jouerFizzBuzz(15), ça devrait jouer jusqu'à 15.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day03/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function jouerFizzBuzz(max) {

    for (let i = 1; i <= max; i++) {
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
}
jouerFizzBuzz(15)


