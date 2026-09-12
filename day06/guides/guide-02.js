/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';
let notes = [12, 15, 8, 19]
let TotalNotes = 0
let Totalstudents =  notes.length 


notes.forEach(note => {
    TotalNotes += note
})

let result = TotalNotes / Totalstudents

console.log(result)