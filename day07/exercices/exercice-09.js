/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
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
    score: 8
},]
let temp;
for (let i = 0; i < arr.length; i++) {
     if(temp == undefined) {
        temp = arr[i]
        continue
     }
     if(temp.score <= arr[i].score) {
        temp = arr[i]
     }
}

console.log(temp)