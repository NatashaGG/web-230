/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 21 December 2017
; Modified By: Natasha Colletta
; Description: This program demonstrates the
; use of array's calling information from
; them.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Assignment 4.4");
console.log(headerMsg + "\n");

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
// Create a one-dimensional 5 element array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
var sortedStates;
// function
// Create a function called getValue that accepts two arguments: an array index placeholder and a filterable value
function getValue(states, val) {
    for (var s = 0; s < states.length; s++) {
        if (states[s] == val) {
            return states[s];
        }
    }
}

sortedStates = states.sort();


// Output
// Display the original unsorted array
console.log("-- ORIGINAL ARRAY --");
for (var f = 0; f < states.length; f++) {
    console.log(states[f]);
}
console.log("\n");

// Sort and display the array
console.log("-- SORTED ARRAY --");
console.log(sortedStates.toString());
console.log("\n");

// invoke the filter() method using the getValue function and output the results
console.log("-- SELECTED VALUE --");
console.log(getValue(states, "Iowa"));


// end program
