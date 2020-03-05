"use strict";

// Array of all lucky colors possible to generate
var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Navy blue', 'Pea green', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hot pink', 'Magenta', 'Plum', 'Olive', 'Cyan'];

// Generates a random number to pull arary index from
var randomColor = Math.floor(Math.random() * (colors.length-1));

// Display the lucky color to HTML doc
document.getElementById('color').innerHTML = colors[randomColor];



// when you click on cookiePic, it generates and displays a new random color
var cookiePic = document.getElementById('default-cookie-pic');

cookiePic.addEventListener('click', function(event) {

    var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'White', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Navy blue', 'Pea green', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hot pink', 'Magenta', 'Plum', 'Olive', 'Cyan'];

    var randomColor = Math.floor(Math.random() * (colors.length-1));

    document.getElementById('color').innerHTML = colors[randomColor];



}, false);

// --lightest-color: #FCF7F7;
// --header-color: #da8f6e;
// --secondary-background-color: #d7b082;
// --shadow-color: #463028;
// --accent-color: #809c80;
// --background-color: #F7E8BF;

function changeCurrentColor (color) {

     var result;
     var bodyStyles = document.body.style;

     switch (color) {
            case "Red":
                result = console.log("Yes, red is a color.");
                bodyStyles.setProperty('--lightest-color', '#FF0000');
                bodyStyles.setProperty('--header-color', '#3E000C');
                bodyStyles.setProperty('--secondary-background-color', '#FB4B4E');
                bodyStyles.setProperty('--shadow-color', '#FFCBDD');
                bodyStyles.setProperty('--accent-color', '#7C0B2B');
                bodyStyles.setProperty('--background-color', '#FB4B4E');
                break;
            case "Orange":
                result = console.log("Yes, orange is a color.");
                break;
            case "Yellow":
                result = console.log("Mellow yello");
                break;
            case "Green":
                 result = console.log("Green machine");
                 break;
            case "Blue":
                 result = console.log("Blue for the win");
                 break;
            case "Purple":
                 result = console.log("Its purple everyone!");
                 break;
            case "Pink":
                 result = console.log("Pink for days");
                 break;
            case "White":
                 result = console.log("White");
                 break;
             case "Black":
                 result = console.log("Black");
                 break;
             case "Brown":
                 result = console.log("Brown on the crown");
                 break;
             case "Azure":
                 result = console.log("Azure monsieur");
                 break;
             case "Ivory":
                 result = console.log("I see Ivory");
                 break;
             case "Teal":
                 result = console.log("Teal fo real");
                 break;
             case "Silver":
                 result = console.log("Silver alert");
                 break;
             case "Navy blue":
                 result = console.log("In the Navy");
                 break;
             case "Pea green":
                 result = console.log("Pea green is the worst");
                 break;
             case "Gray":
                 result = console.log("gray or grey");
                 break;
             case "Maroon":
                 result = console.log("Maroon 5 guys");
                 break;
             case "Charcoal":
                 result = console.log("Charcoal makes the heart glow");
                 break;
             case "Aquamarine":
                 result = console.log("Aqua my marine");
                 break;
             case "Coral":
                 result = console.log("Coral ");
                 break;
             case "Fuchsia":
                 result = console.log("Fuchsia is a hard word to spell");
                 break;
             case "Wheat":
                 result = console.log("Read it in Wheat");
                 break;
             case "Lime":
                 result = console.log("Lime time");
                 break;
             case "Crimson":
                 result = console.log("Oh my crimson");
                 break;
             case "Khaki":
                 result = console.log("Get my khakis");
                 break;
             case "Hot pink":
                 result = console.log("Its hot pink");
                 break;
             case "Magenta":
                 result = console.log("M-a-g-e-n-t-a");
                 break;
             case "Plum":
                 result = console.log("plum in my tum");
                 break;
             case "Olive":
                 result = console.log("Olive the other reindeer");
                 break;
             case "Cyan":
                 result = console.log("Cyan is the color in my printer.");
                 break;
            default:
                result = console.log("I do not know that color.");
                break;
        }
        return result;
}

changeCurrentColor(colors[randomColor]);
