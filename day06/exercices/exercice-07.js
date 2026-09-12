/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 07 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * TABLEAU INVERSÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez un tableau [1, 2, 3, 4, 5] et inversez son ordre pour qu'il devienne [5, 4, 3, 2, 1]. *(Astuce: la méthode .reverse() existe).*
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-07
 * ▶️ Commande : node day05/exercices/exercice-07.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let reversed = []

let arr = [1, 2, 3, 4, 5]

for (let i = arr.length - 1; i >=  0; i--) {
    reversed.push(arr[i])    
}
console.log(reversed)