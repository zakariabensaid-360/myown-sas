/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


function Search(arr, target) {
        let start = 0
        let end = arr.length - 1
    let i = 0
    while (arr.length > i) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < target) {
            start = mid + 1

            i++
        } else if (arr[mid] > target) {
            end = mid - 1
            i++
        } else if (arr[mid] == target) {
            return mid
        }
    }
    return "not found"
}


console.log(Search([10, 20, 30, 40, 45, 50, 60], 10))