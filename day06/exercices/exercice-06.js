/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * FUSION DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez groupe1 = ["A", "B"] et groupe2 = ["C", "D"]. Fusionnez-les pour obtenir ["A", "B", "C", "D"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let gp1 = ["A", "B"] 
let gp2 = ["C", "D"]
let result = [...gp1, ...gp2]

console.log(result)