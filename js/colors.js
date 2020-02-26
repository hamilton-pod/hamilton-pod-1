"use strict";

// Array of all lucky colors possible to generate
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Navy blue', 'Pea green', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hot pink', 'Magenta', 'Plum', 'Olive', 'Cyan'];

// Generates a random number to pull arary index from
var randomColor = Math.floor(Math.random() * (colors.length-1));

// Display the lucky color to HTML doc
document.getElementById('color').innerHTML = colors[randomColor];



var cookiePic = document.getElementById('default-cookie-pic');

cookiePic.addEventListener('click', function(event) {

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Navy blue', 'Pea green', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hot pink', 'Magenta', 'Plum', 'Olive', 'Cyan'];

    var randomColor = Math.floor(Math.random() * (colors.length-1));

    document.getElementById('color').innerHTML = colors[randomColor];


}, false);