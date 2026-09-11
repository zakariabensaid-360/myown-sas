/**
 * JOUR 05 — GUIDE 03
 * Remplacement global
 *
 * OBJECTIF
 * Vous avez une URL mal formatée : "youcode-safi-2024". Remplacez tous les tirets par des espaces.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';
let text = "youcode-safi-2024"
let foramated = ""
for (let i = 0; i < text.length ; i++) {
    if (text[i] == "-") {
        foramated += " "
    } else {
        foramated += text[i]
    }
}

console.log(foramated)