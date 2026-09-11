/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


function chiffrerCesar(text, decalage) {
    let getCurrentChar = text.charCodeAt(text.length - 1)
    let str = ""
    str += String.fromCharCode(getCurrentChar + decalage - 2) + String.fromCharCode(getCurrentChar + decalage - 1) + String.fromCharCode(getCurrentChar + decalage)
return str
}


console.log(chiffrerCesar("ABC", 1))