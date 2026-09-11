/**
 * JOUR 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const text = "J'apprends le JavaScript à YouCode".toLowerCase()
const target = "javascript"

 text.split(' ').forEach(word => {
    if (target == word) {
        console.log("the match has been found")
    }
})

