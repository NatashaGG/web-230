var header = require('../header.js'); 
var headerMsg = header.display("Natasha", "Colletta", "Assignment 3.4");
console.log(headerMsg + "\n");
// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable
var num = 6;



// for loop
console.log("-- Displaying for loop --");
for (var x = 0; x < 10; x++){
    if (num==randomNumber()){
        logMatch(num, randomNumber())
    }
    else {
        logMismatch(num, randomNumber())
    }
}



// while loop
console.log("\n-- Displaying while loop --"); 
while (num < 10) {
    if (num==randomNumber()){
        logMatch(num, randomNumber())
    }
    else {
        logMismatch(num, randomNumber())
    }
    num++;
}



// Reused functions from exercise-3.2.js
function match(a,b) {
    if (a == b) {
        return "true";
    } else {
        return "false";
    }
} 

function logMismatch(c,d) {
    if (c!=d) {
        console.log(c + " does not match " + d + "!");
    }
}

function logMatch(e,f) {
    if (e==f) {
        console.log(e + " does match " + f + "!");
    }
}

// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}