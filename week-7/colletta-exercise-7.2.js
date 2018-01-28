/*
============================================
 Title: Exercise 
; Author: Professor Krasso
; Date: 2 January 2018
; Modified By: Natasha Colletta
; Description: This program 
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise ");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program
function employeeInfo(id, firstName, lastName, title)
{
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [];
// Create employee items
employees[0] = new employeeInfo(1, "Thomas", "Edison", "Software Engineer");
employees[1] = new employeeInfo(2, "Benjamin", "Franklin", "Programmer");
employees[2] = new employeeInfo(3, "Nikola", "Tesla", "Project Manager");
employees[3] = new employeeInfo(4, "Charles", "Babbage", "Product Manager");
employees[4] = new employeeInfo(5, "Alexander", "Bell", "Business Analyst");

for (var k = 0; k <employees.length; k++)
{
    var emp = employees[k];

    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " "  + emp.title);
}
// end program