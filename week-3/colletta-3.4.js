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
// added comments/code from feedback
var rnd1;
console.log("-- Displaying for loop --");
for (var x=0; x<10; x++){
    rnd1 = randomNumber();

    if (match(num, rnd1)){
        logMatch(num, rnd1);
    }
    else {
        logMismatch(num, rnd1);
    }
}



// while loop
// Added comments from feedback
console.log("\n-- Displaying while loop --");
var index = 0;
var rnd2; 
while (index < 10) { //here is where we compare the index value to the number of iterations we want
    rnd2 = randomNumber();
    if (match(num,rnd2)){
        logMatch(num,rnd2);
    }
    else {
        logMismatch(num,rnd2);
    }

    index++; //here is where we increase the index value
}



// Reused functions from exercise-3.2.js
// Made changes per feedback
function match(a,b) {
    if (a == b) {
        return true;
    } else {
        return false;
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