/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * EXTRACTION DE NOM DE DOMAINE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend une adresse email (ex: "contact@youcode.ma") et retourne uniquement le domaine ("youcode.ma"). *Indice : Combinez indexOf et slice ou utilisez split.*
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day05/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function Getdomain(email) {
    let domaine = ""
    let index;
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            index = i
        }      
    }

            if (index !== undefined) {
            for (let i = index + 1; i < email.length; i++) {
                domaine += email[i]
                
            }
        }
        return domaine
}

console.log(Getdomain("contact@youcode.ma"))