/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR D'ACRONYME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir de la phrase "Hyper Text Markup Language", retournez "HTML".
 * Indice : Découpez en mots, bouclez, prenez la première lettre de chaque mot, mettez en majuscule, et rejoignez le tout.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let text = "Hyper Text Markup Language"
let result = ""
const elements = text.split(" ")
elements.forEach(element => {
    result += element[0]
})

if (result == "HTML") {
    console.log(result)
}