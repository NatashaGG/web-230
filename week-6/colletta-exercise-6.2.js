/*
============================================
; Title: Exercise 6.2
; Author: Professor Krasso
; Date: 21 January 2018
; Modified By: Natasha Colletta
; Description: This program throws an error
; of my choosing and displays the error message
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Natasha", "Colletta", "Exercise 6.2");
console.log(headerMsg + "\n");
/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
var number = "Words";

try {
    var num = parseFloat(number);
    if (isNaN(num)) throw "FormattingException";

    console.log(num);
}
catch (err) {
    console.log("\n" + "Catch clause: " + err);
}
finally {
    console.log("Finally clause reached: End of program â€¦");
}

// end program