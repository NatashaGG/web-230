/*
============================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 21 December 2017
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 4.3");
console.log(headerMsg + "\n");

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program
// Create a one-dimensional array with 5 vehicles
var arr = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];
var val;

// function
// Create a function called getValue that accepts two arguments: a one-dimensional array and a value to filter against
function getValue(arr, val) {
    for (var v = 0; v < arr.length; v++) {
        if (arr[v] == val) {
            return arr[v]
        }
    }
}

// Output
// to display array listing
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var f = 0; f < arr.length; f++) {
    console.log(arr[f]);
}
console.log("\n");
console.log(" -- SELECTED VALUE --");
console.log(getValue(arr, "Motorcycle"));
console.log("\n");
console.log(" -- SELECTED VALUE --");
console.log(getValue(arr, "Bus"));

// end program