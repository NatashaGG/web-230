/*
============================================
; Title: Assassignment 5.4
; Author: Professor Krasso
; Date: 14 January 2018
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Assassignment 5.4");
console.log(headerMsg + "\n");
/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program
// Reuse the Array-Like Object collection created in Exercise 5.3 (famousComposers)
var famousComposers = [
    {
        firstName:'Ludwig',
        lastName:'Beethoven',
        genre:'Classical',
        rating:'8',
    },
    {
        firstName:'Wolfgang',
        lastName:'Mozart',
        genre:'Classical',
        rating:'10',
    },
    {
        firstName:'Johann',
        lastName:'Bach',
        genre:'Classical',
        rating:'9',
    },
    {
        firstName:'Joseph',
        lastName:'Haydn',
        genre:'Classical',
        rating:'6',
    },
    {
        firstName:'Franz',
        lastName:'Schubert',
        genre:'Classical',
        rating:'5',
    },
];
// Using the map() method, create a filtered list of composers by rating
var comnposersByRating = famousComposers.map(function(composer) {
    return "Rating: " + composer.rating + '\n' + "Composer: " + composer.lastName + '\n'
});
// Using the map() method, create a filtered list of composers by genre 
var composersByGenre = famousComposers.map(function(composer) {
    return "Genre: " + composer.genre + '\n' + "Composer: " + composer.lastName + '\n'
});
// Iterate over the filtered collections using the forEach() method and output the results
console.log("-- COMPOSER BY RATING --");
comnposersByRating.forEach(function(rating) {
    console.log(rating)
});

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(function(genres) {
    console.log(genres)
});


// end program