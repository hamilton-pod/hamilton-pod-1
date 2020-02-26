"use strict";

// // documents a random number from 0 - 100
var randomNumber = Math.floor(Math.random() * 101);

var number = document.getElementById("number").innerHTML = "Your lucky number is: " + randomNumber;





var cookiePic = document.getElementById('default-cookie-pic');

// When cookie pic is clicked...
cookiePic.addEventListener('click', function(event) {

    // Generates a random index to grab fortune from array
    // var randomNumber = Math.floor(Math.random() * 101);
    // var randomIndex = Math.floor(Math.random() * (fortunes.length-1));

    // Replace the empty <p> in HTML document with randomly generated fortune
    // var number = document.getElementById("number");
    // number.innerHTML = "Your lucky number is: " + randomNumber;
    // var number = document.getElementById('number');
    // fortune.innerHTML = fortunes[randomIndex].fortune;

    // Display the fortune paragraph
    number.style.display = 'inherit';

    // Hide default instructions
    var defaultInstructions = document.getElementById('default-instructions');
    defaultInstructions.style.display = 'none';

    // Display repeat instructions
    var repeatInstructions = document.getElementById('repeat-instructions');
    repeatInstructions.style.display = 'inherit';

}, false);