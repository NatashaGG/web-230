/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 21 January 2018
; Modified By: Natasha Colletta
; Description: This program creates an
; object literal with a nested object
; literal person and outputs the results.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Assignment 6.4");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
    id: "142",
    name: "Sports Team",
    dateCreated: "January 21st",
    priority: "High",
    personId: "42", 
    person: {
        // person properties
        id: "78",
        firstName: "Natasha",
        lastName: "Colletta",
        jobTitle: "Air Force"
    }
};

console.log("\n");
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + "and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + "(" + ticket.person.jobTitle + ").");
// end program