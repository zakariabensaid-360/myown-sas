/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MISE À JOUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Changez l'âge de l'utilisateur précédent pour l'augmenter de 1, et ajoutez-lui une propriété email.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day07/exercices/exercice-02.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const obj = {
    nom: "zakaria",
    age: 20,
    estAdmin: false
}

obj.age = obj.age + 1
obj.email = "zakaria@gmail.com"
console.log(obj)