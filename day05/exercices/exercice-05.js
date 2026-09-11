/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * TROUVER LA POSITION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Trouvez et affichez l'index (la position) du premier espace dans la phrase "Bonjour tout le monde".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day05/exercices/exercice-05.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let text = "Bonjour tout le monde"
for (let i = 0; i < text.length; i++) {
    if(text[i] == " ") {
        console.log(i)
        break
    }
}
