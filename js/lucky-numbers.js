"use strict";

// documents a random number from 0 - 100
var randomNumber = Math.floor(Math.random() * 101);

document.getElementById("number").innerHTML = "Your lucky number is: " + randomNumber;

// add next line to the HTML:

// <p id="number"></p>