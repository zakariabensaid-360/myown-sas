/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let joueur1 = "Pierre";
let joueur2 = "Ciseaux";
let joueur3 = "Papier";

// on case if this exr was a mistake i added the jouer3 to c;plete the logic amd  make this work

const Game = (joueur1, joueur2) => {
    if (joueur1 === joueur2) {
        return "draw";
    }
    if (
        (joueur1 === "Pierre" && joueur2 === "Ciseaux") ||
        (joueur1 === "Papier" && joueur2 === "Pierre") ||
        (joueur1 === "Ciseaux" && joueur2 === "Papier")
    ) {
        return "Joueur 1 gagne !";
    }
    return "Joueur 2 gagne !";
};

console.log(Game(joueur1, joueur2));