/*
=========================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: December 6, 2017
; Modified By: Natasha Colletta
; Description: Function property to return
; header and hello message.
=========================================
*/

var header = require('../header.js'); 
var headerMsg = header.display("Natasha", "Colletta", "Exercise 2.3");
// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.natashaColletta = "Natasha Colletta";

// function 
function myName() {
    return myName.natashaColletta;
}

// output
var outputMsg = headerMsg + '\n' + '\n' + "Hello " + myName() + "!";
console.log(outputMsg);
console.log('\n'); 





// end program 