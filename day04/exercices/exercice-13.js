/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function genererMotDePasse(longueur) {
    let motDePasse = ""
    let str = "aazertyuiopqsdfghjklmwxcvbn"
    let num = "123456789" 
    let rand = Math.round(Math.random())
    if(rand == 0) {
        for (let i = 0; i < longueur; i++) {
            motDePasse += str[Math.round(Math.random() * str.length)] 
        }
        motDePasse += "A"
        return motDePasse
    } else {
        for (let i = 0; i < longueur; i++) {
            motDePasse += num[Math.round(Math.random() * num.length)] 
        }
        return motDePasse

    }

}



console.log(genererMotDePasse(8))
