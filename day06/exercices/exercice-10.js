/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RETIRER DES ÉLÉMENTS (SPLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez mois = ["Jan", "Fev", "MARS_EN_TROP", "Avril"]. Utilisez .splice() pour retirer "MARS_EN_TROP" sans toucher aux autres.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day05/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let mois = ["Jan", "Fev", "MARS_EN_TROP", "Avril"]
mois.splice(2,1)
console.log(mois)

