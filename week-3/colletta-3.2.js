var header = require('../header.js'); 
var headerMsg = header.display("Natasha", "Colletta", "Exercise 3.2");
console.log(headerMsg);
// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
// Changed match to reflect boolean not strings
function match(a,b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
} 
function logMatch(e,f) {
    if (e==f) {
        console.log(e + " and " + f + " do match!");
    }
}
function logMismatch(c,d) {
    if (c!=d) {
        console.log(c + " and " + d + " do not match!");
    }
}


// six (6) test variables 
var Truck = "Truck";
var Car = "Car";
var Three = "Three";
var Four = "Four";
var Bike1 = "Bike";
var Bike2 = "Bike";


// Output from the match() function... 
console.log("\n");
console.log(match("A", "B"));
console.log(match(2, 2)); 
console.log("\n");

// Conditional "if...else" statements. Include checks for all six (6) test variables 
// replaced if clauses with match function per feedback
if(match(Truck,Car))
    logMatch(Truck,Car);
else
    logMismatch(Truck,Car);

if(match(Bike1,Bike2))
    logMatch(Bike1,Bike2);
else
    logMismatch(Bike1,Bike2);

if(match(Four,Three))
    logMatch(Four,Three);
else
    logMismatch(Four,Three);


// end program 