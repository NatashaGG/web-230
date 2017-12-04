/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: <Your name>
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line
var firstName = "Natasha";
var lastName = "Col";
var middleName = "Lee";
var address = "1234 St, Bellevue, Ne";
var payRate = "$14.2";
var hireDate = new Date(2017, 12, 3);

var employeeRecord = "\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nMiddle Name:" + middleName + "\nAddress:" + address + "\nPay Rate:" + payRate + "\nHire Date:" + hireDate;
console.log(employeeRecord);

var firstName = "Carroll";
var lastName = "Whi";
var middleName = "Chris";
var address = "4321 St, Bellevue, Ne";
var payRate = "$12.4";
var hireDate = new Date(2017, 11, 4);

var employeeRecord = "\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nMiddle Name:" + middleName + "\nAddress:" + address + "\nPay Rate:" + payRate + "\nHire Date:" + hireDate;
console.log(employeeRecord);

var firstName = "Lore";
var lastName = "Mul";
var middleName = "Robert";
var address = "1st Ave, Bellevue, Ne";
var payRate = "$18.5";
var hireDate = new Date(2017, 10, 5);

var employeeRecord = "\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nMiddle Name:" + middleName + "\nAddress:" + address + "\nPay Rate:" + payRate + "\nHire Date:" + hireDate;
console.log(employeeRecord);

var firstName = "Darryl";
var lastName = "Gah";
var middleName = "Glenn";
var address = "1423 St, Bellevue, Ne";
var payRate = "$16.2";
var hireDate = new Date(2017, 9, 8);

var employeeRecord = "\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nMiddle Name:" + middleName + "\nAddress:" + address + "\nPay Rate:" + payRate + "\nHire Date:" + hireDate;
console.log(employeeRecord);

var firstName = "Shawn";
var lastName = "Matt";
var middleName = "Dan";
var address = "56743 St, Bellevue, Ne";
var payRate = "$15.3";
var hireDate = new Date(2017, 8, 7);

var employeeRecord = "\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nMiddle Name:" + middleName + "\nAddress:" + address + "\nPay Rate:" + payRate + "\nHire Date:" + hireDate;
console.log(employeeRecord);

// end of program 
