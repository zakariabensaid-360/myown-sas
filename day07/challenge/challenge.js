/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day07/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

let utilisateurs = []


function ajouterUtilisateur(nom, email) {
    if (utilisateurs.length == 0) {
        utilisateurs.push({
            id: 1,
            nom,
            email
        })
        return
    }
    utilisateurs.push({
        id: utilisateurs.length + 1,
        nom,
        email
    })
}


function trouverParEmail(email) {
    for (let i = 0; i < utilisateurs.length; i++) {
        if(utilisateurs[i].email == email) {
            return utilisateurs[i]
        }  
    }
}

function supprimerParId(id) {
    let newArr = []
        for (let i = 0; i < utilisateurs.length; i++) {
        if(utilisateurs[i].id !== id) {
            newArr.push(utilisateurs[i])
        }  
    }
    utilisateurs = newArr
}


function afficherAnnuaire() {
    utilisateurs.forEach(user=> {
        console.log(user)
    })
}




ajouterUtilisateur('test', 'test@gmail.com')
ajouterUtilisateur('test1', 'test1@gmail.com')
ajouterUtilisateur('test2', 'test2@gmail.com')
ajouterUtilisateur('test3', 'test3@gmail.com')
supprimerParId(3)
afficherAnnuaire()