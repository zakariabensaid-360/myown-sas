/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Remplacez le mot "idiot" par "*" dans la phrase : "Ne sois pas idiot, réfléchis avant de parler.".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


const text = "Ne sois pas idiot, réfléchis avant de parler."
const words = text.split(" ")
let safetext = ""
words.forEach(word => {
    if(word.startsWith("idiot")) {
        safetext += " * "
    } else {
        safetext += " " + word
    }
})
console.log(safetext)