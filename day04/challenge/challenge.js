/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

var gold = 0

// 2. Create a function `addGold(amount)` that adds to the purse and displays "You picked up [amount] gold. Total: [gold]".

function addGold(amount) {
    gold += amount
    console.log("You picked up " + amount + "gold. Total: " + gold)
}

// Create a function `spendGold(amount)` that checks if the hero has enough gold. If so, deduct the gold and display the purchase

function spendGold(amount) {
    if(gold < amount) {
        console.log("Insufficient funds")
        return;
    }
    gold -= amount

    console.log("The gold has been spend")
}

// Create a function `winBattle()` that calls `addGold` with a random amount between 10 and 50.

function winBattle() {
    let RandomGold = Math.round(Math.random() * 50)
    if(RandomGold < 10 ) {
        RandomGold * 10
    }
    addGold(RandomGold)

    console.log("you did win the battle and you recived " + RandomGold )
}

winBattle()
winBattle()
winBattle()

spendGold(100)
/* 
* 5. Simulate an adventure: win 3 battles, then attempt to buy a sword costing 100 gold. 
* Bonus: Use closures to avoid having `gold` as a vulnerable global variable!


*/