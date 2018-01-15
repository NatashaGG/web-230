/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 14 January 2018
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 5.3");
console.log(headerMsg + "\n");

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program
// Create an Array-Like Object of 5 famous composers
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
]

// Iterate over the Array-Like Object using the built-in forEach() method and output the results
famousComposers.forEach(function(music) {
    console.log("Last Name: " + music.lastName + ", Genre: " + music.genre + ", Rating: " + music.rating);
})



// end program