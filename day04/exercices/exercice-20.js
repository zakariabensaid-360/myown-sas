/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
    let cache = new Map()

const SmartCalcualator = (a, b) => {
    let searchID = "ID" + a + b
    if (cache.get(searchID)) {
        console.log("second")
        return cache.get(searchID)
    }

    console.log("first")
    let answer = a + b
    cache.set(searchID, answer)
    return answer
     

}
SmartCalcualator(5, 2)
SmartCalcualator(5, 2)
SmartCalcualator(5, 2)
