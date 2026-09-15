/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let cars = {
    models: {
        year: 2000
    }
}
let clone = { ...cars}
let test = structuredClone(cars)
clone.models.year = 4000


console.log(cars)


console.log(test)
/*
that happen beacuse i only cloned the addres in the ram of year value i only copied the pointer so if i modifief in the clone 
it means i edited the value where 2 object share sa;e pointer so the original it will change its value cuz i edited the pointer

*/

