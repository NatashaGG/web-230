/*
==========================================
Title: Exercise 2.4
Author: Professor Krasso
Date: December 6, 2017
Modified By: Natasha Colletta
Description: Creating multiple functions
======================================
*/
var header = require('../header.js'); 
var headerMsg = header.display("Natasha", "Colletta", "Exercise 2.4");

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 
// function properties here:
    var firstName = "Natasha ";
    var lastName = "Colletta";
    var todayDate = new Date();
    var day = todayDate.getDate();
    var month = todayDate.getMonth();
    var year = todayDate.getFullYear();
    var temp = 42.4;
    tempFixed = temp.toFixed(1);
    var age = 24;
    var savings = parseFloat(42000000);

// function(s) go here...
function fullName(firstName,lastName) {
    return firstName + lastName;
}

function dateWriter(todayDate) {
    todayDate = month + "/" + day + "/" + year;
    return todayDate;
}

function formatNumber(temp) {
    return temp;
}

function convertToInt(age) {
    String(age);
    return age;
}

function convertToFloat(savings) {
    String(savings)
    return savings;
}

// output
var outputMsg = headerMsg + '\n' + '\n' + "Hello my name is " + fullName(firstName,lastName) + "!" + '\n';
console.log(outputMsg);
var secondOutput = "Today's date is " + dateWriter(todayDate) + " and the current temperature is " + formatNumber(temp) + "." + '\n';
console.log(secondOutput);
var thirdOutput = "I am " + convertToInt(age) + " and my savings account goal is " + convertToFloat(savings) + " dollars.";
console.log(thirdOutput);




// end program 