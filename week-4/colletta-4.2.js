/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 21 December 2017
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 4.2");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
// Create a one-dimensional array with 5 fruit elements (order does not have to match)
var Fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];


// function
// Create a function named getFruit that accepts as an argument a one-dimensional array and outputs the results in a well formatted structure
function getFruit() {
    for (var f =0; f < Fruits.length; f++) {
        console.log(Fruits[f]); // Call the getFruit function using the one-dimensional array created in step one
    }
}


// Output from the getFruit() function
// Output the results
getFruit(Fruits);


// end program