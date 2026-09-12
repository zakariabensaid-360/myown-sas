/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]

let full = [...arr1, ...arr2]
function sorting(arr) {
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
 

        if (arr[i] > arr[i+1]) {
            temp = arr[i] 

            arr[i] = arr[i+1]
            arr[i+1] = temp
        } 
    }
    return arr
}

console.log(sorting(sorting(full)))