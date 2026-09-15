/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let arr = [{
    name: 'zaki',
    score: 10
},{
    name: 'amine',
    score: 7
},{
    name: 'idk',
    score: 12
},]
let temp;
for (let i = 0; i < arr.length; i++) {
     if(temp == undefined) {
        temp = arr[i]
        continue
     }
     if(temp.score < arr[i].score) {
        temp = arr[i]
     }
}

console.log(temp)