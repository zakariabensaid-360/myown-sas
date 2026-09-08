/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SIMULATION DE SCRAPING : EXTRACTION PAGINÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Imaginez que vous "scrappez" des pages web numérotées. Vous avez un totalItems = 45, et chaque page affiche 10 éléments. Écrivez une boucle while qui affiche : "Scraping page 1 (10 items)", "Scraping page 2 (10 items)", jusqu'à la dernière page ("Scraping page 5 (5 items)").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day02/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let pages = 5;
while (pages > 0) {
    if (pages === 1) {
        console.log(`Scraping page ${6 - pages} (5 items)`);
        break;
    }
    console.log(`Scraping page ${6 - pages} (10 items)`);
    pages--;
}