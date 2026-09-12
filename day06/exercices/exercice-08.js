/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function getx(arr) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if(max >= arr[i]) {
        continue;
    } else {
        max = arr[i]
    }
    
  }

    for (let i = 1; i < arr.length; i++) {
    if(min <= arr[i]) {
        continue;
    } else {
        min = arr[i]
    }
    
  }
  return [max, min]
}

console.log(getx([1,5,6,3,2,4,1,2,4,5,2]))