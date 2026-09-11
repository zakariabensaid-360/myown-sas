/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * INVERSION DE MOTS DANS UNE PHRASE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez la phrase "Bonjour le monde" et transformez-la en "monde le Bonjour".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let text = "Bonjour le test hhh monde"
let newText = ""

let words = text.split(' ')

newText +=   words[words.length - 1] + " "

for (let i = 1; i <= words.length - 1; i++) {
    if(i == words.length - 1) {
        newText += words[0]
    } else {
        newText += words[i] + " "
    }
}
console.log(newText)