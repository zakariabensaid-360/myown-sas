/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * SUPPRESSION
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez le tableau précédent. Retirez le dernier invité (Amine) et affichez le tableau mis à jour.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day05/exercices/exercice-03.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const invites = []
invites.push("Yassine")
invites.push("Sara")
invites.push("Amine")

invites.pop()

console.log(invites)
