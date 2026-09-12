/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.


let panier = [101, 105, 101, 102]

function ajouterAuPanier(id) {
    panier.push(id)
}

function retirerDuPanier(id) {
    let box = []

    for (let i = 0; i < panier.length; i++) {
        if (panier[i] == id) {
            continue;    
        }
        box.push(panier[i])
        
    }
    panier = box
    console.log(panier)
}

function afficherQuantites() {
    let items = new Map()
    for (let i = 0; i < panier.length; i++) {
        if(items.get(panier[i]) == undefined) {
            items.set(panier[i], 1)
            continue;
        }
        items.set(panier[i], items.get(panier[i]) + 1)
        
    }
        items.forEach((value, id) => {
        console.log(` Article ${id} : ${value} exemplaires`)
    })
    return items
}
ajouterAuPanier(103)
ajouterAuPanier(103)
retirerDuPanier(101)
afficherQuantites()