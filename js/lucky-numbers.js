"use strict";

// generates a random number from 0 - 100
var randomNumber1 = Math.floor(Math.random() * 99);
var randomNumber2 = Math.floor(Math.random() * 99);
var randomNumber3 = Math.floor(Math.random() * 99);
var randomNumber4 = Math.floor(Math.random() * 99);
var randomNumber5 = Math.floor(Math.random() * 99);
var randomNumber6 = Math.floor(Math.random() * 99);

// displays the random number to HTML
var number = document.getElementById("number").innerHTML = randomNumber1 + ' - ' + randomNumber2 + ' - ' + randomNumber3 + ' - ' + randomNumber4 + ' - ' + randomNumber5 + ' - ' +randomNumber6 ;

document.getElementById('number').innerHTML = number;


// when you click on cookiePic, it generates and displays a new random number
var cookiePic = document.getElementById('default-cookie-pic');

cookiePic.addEventListener('click', function(event) {
    var randomNumber1 = Math.floor(Math.random() * 99);
    var randomNumber2 = Math.floor(Math.random() * 99);
    var randomNumber3 = Math.floor(Math.random() * 99);
    var randomNumber4 = Math.floor(Math.random() * 99);
    var randomNumber5 = Math.floor(Math.random() * 99);
    var randomNumber6 = Math.floor(Math.random() * 99);

    var number = document.getElementById("number").innerHTML = randomNumber1 + ' - ' + randomNumber2 + ' - ' + randomNumber3 + ' - ' + randomNumber4 + ' - ' + randomNumber5 + ' - ' +randomNumber6 ;

    document.getElementById('number').innerHTML = number;

}, false);






















// // When cookie pic is clicked...
// cookiePic.addEventListener('click', function(event) {
//
//     // Generates a random index to grab fortune from array
//     var randomNumber = Math.floor(Math.random() * 101);
//     // var randomIndex = Math.floor(Math.random() * (fortunes.length-1));
//
//     // Replace the empty <p> in HTML document with randomly generated fortune
//     var number = document.getElementById("number");
//     number.innerHTML = randomNumber;
//
//
//     // Display the number paragraph
//     number.style.display = 'inherit';
//
//     // Hide default instructions
//     var defaultInstructions = document.getElementById('default-instructions');
//     defaultInstructions.style.display = 'none';
//
//     // Display repeat instructions
//     var repeatInstructions = document.getElementById('repeat-instructions');
//     repeatInstructions.style.display = 'inherit';
//
// }, false);