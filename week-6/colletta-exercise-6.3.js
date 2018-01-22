/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 21 January 2018
; Modified By: Natasha Colletta
; Description: This program creates an
; object literal for a ticketing system and
; displays each field in one string.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 6.3");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

var ticket = {
    id: "42",
    name: "Moana",
    requester: "Natasha Colletta"
};

console.log("{id: %s, name: %s, requester: %s}", ticket.id, ticket.name, ticket.requester);



// end program