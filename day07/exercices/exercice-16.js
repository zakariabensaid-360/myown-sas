/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * IMBRICATION COMPLEXE (NESTED OBJECTS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet entreprise qui a un nom, et une propriété employes qui est un tableau d'objets. Affichez le prénom du deuxième employé.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day07/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let company = {
    employee: [
        {
            name: "zaki",
            salary: 2500
        },
                {
            name: "oussama",
            salary: 4000
        }
    ]
}

console.log(company.employee[1].name)