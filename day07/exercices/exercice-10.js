/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE VALEURS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez une chaîne de caractères "abracadabra". Créez une fonction qui retourne un objet comptant le nombre d'occurrences de chaque lettre. (ex: { a: 5, b: 2, r: 2, c: 1, d: 1 }).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day07/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.



let chars = "abracadabra"
let obj = {}
for (let i = 0; i < chars.length; i++) {
    if (obj[chars[i]] == undefined) {
        obj[chars[i]] = 1
        continue
    }
    obj[chars[i]] =  obj[chars[i]] + 1
}


console.log(obj)