/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function check(str1, str2) {
    if(str1.length !== str2.length) return false;
    let counter = 0
    
    for (let i = 0; i <= str1.length - 1; i++) {
        for (let j = 0; j <= str2.length - 1; j++) {
            if(str1[i] == str2[j]) {
                counter += 1
            }
            
        }
    }

    if(counter == str1.length) {
        return true
    }
    return "they are not anagrammes"
}

console.log(check("chien", "niche"))