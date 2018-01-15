/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 14 January 2018
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 5.2");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program
// Create a one-dimensional array with 5 elements of your favorite food type
var favFoods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// Using the forEach() method, iterate over the array
favFoods.forEach(function(food) {
    console.log(food)
});

// Output from the getFood() function
// Output the results



// end program