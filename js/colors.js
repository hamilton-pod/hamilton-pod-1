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

    changeCurrentColor(colors[randomColor]);  //Not function in on click

}, false);

function changeCurrentColor (color) {

     var result;
     var bodyStyles = document.getElementById('color-circle').style;

     switch (color) {
            case "Red":
                result = console.log("Yes, red is a color.");
                bodyStyles.setProperty('--accent-color', '#FF0000');
                break;
            case "Orange":
                result = console.log("Yes, orange is a color.");
                bodyStyles.setProperty('--accent-color', '#F7B538');
                break;
            case "Yellow":
                result = console.log("Mellow yello");
                bodyStyles.setProperty('--accent-color', '#FFFF00');
                break;
            case "Green":
                 result = console.log("Green machine");
                 bodyStyles.setProperty('--accent-color', '#00FF00');
                 break;
            case "Blue":
                 result = console.log("Blue for the win");
                 bodyStyles.setProperty('--accent-color', '#0000FF');
                break;
            case "Purple":
                 result = console.log("Its purple everyone!");
                 bodyStyles.setProperty('--accent-color', '#800080');
                 break;
            case "Pink":
                 result = console.log("Pink for days");
                 bodyStyles.setProperty('--accent-color', '#FFC0CB');
                 break;
            case "White":
                 result = console.log("White");
                 bodyStyles.setProperty('--accent-color', '#FFFFFF');
                 break;
             case "Black":
                 result = console.log("Black");
                 bodyStyles.setProperty('--accent-color', '#000000');
                 break;
             case "Brown":
                 result = console.log("Brown on the crown");
                 bodyStyles.setProperty('--accent-color', '#654321');
                 break;
             case "Azure":
                 result = console.log("Azure monsieur");
                 bodyStyles.setProperty('--accent-color', '#007fff');
                 break;
             case "Ivory":
                 result = console.log("I see Ivory");
                 bodyStyles.setProperty('--accent-color', '#fffff0');
                 break;
             case "Teal":
                 result = console.log("Teal fo real");
                 bodyStyles.setProperty('--accent-color', '#008080');
                 break;
             case "Silver":
                 result = console.log("Silver alert");
                 bodyStyles.setProperty('--accent-color', '#C0C0C0');
                 break;
             case "Navy blue":
                 result = console.log("In the Navy");
                 bodyStyles.setProperty('--accent-color', '#000080');
                 break;
             case "Pea green":
                 result = console.log("Pea green is the worst");
                 bodyStyles.setProperty('--accent-color', '#739122');
                 break;
             case "Gray":
                 result = console.log("gray or grey");
                 bodyStyles.setProperty('--accent-color', '#808080');
                 break;
             case "Maroon":
                 result = console.log("Maroon 5 guys");
                 bodyStyles.setProperty('--accent-color', '#800000');
                 break;
             case "Charcoal":
                 result = console.log("Charcoal makes the heart glow");
                 bodyStyles.setProperty('--accent-color', '#36454f');
                 break;
             case "Aquamarine":
                 result = console.log("Aqua my marine");
                 bodyStyles.setProperty('--accent-color', '#00FFFF');
                 break;
             case "Coral":
                 result = console.log("Coral ");
                 bodyStyles.setProperty('--accent-color', '#ff7f50');
                 break;
             case "Fuchsia":
                 result = console.log("Fuchsia is a hard word to spell");
                 bodyStyles.setProperty('--accent-color', '#FF00FF');
                 break;
             case "Wheat":
                 result = console.log("Read it in Wheat");
                 bodyStyles.setProperty('--accent-color', '#f5deb3');
                 break;
             case "Lime":
                 result = console.log("Lime time");
                 bodyStyles.setProperty('--accent-color', '#32CD32');
                 break;
             case "Crimson":
                 result = console.log("Oh my crimson");
                 bodyStyles.setProperty('--accent-color', '#DC143C');
                 break;
             case "Khaki":
                 result = console.log("Get my khakis");
                 bodyStyles.setProperty('--accent-color', '#c3b091');
                 break;
             case "Hot pink":
                 result = console.log("Its hot pink");
                 bodyStyles.setProperty('--accent-color', '#FF69B4');
                 break;
             case "Magenta":
                 result = console.log("M-a-g-e-n-t-a");
                 bodyStyles.setProperty('--accent-color', '#FF00FF');
                 break;
             case "Plum":
                 result = console.log("plum in my tum");
                 bodyStyles.setProperty('--accent-color', '#8e4585');
                 break;
             case "Olive":
                 result = console.log("Olive the other reindeer");
                 bodyStyles.setProperty('--accent-color', '#808000');
                 break;
             case "Cyan":
                 result = console.log("Cyan is the color in my printer.");
                 bodyStyles.setProperty('--accent-color', '#00FFFF');
                 break;
            default:
                result = console.log("I do not know that color.");
                bodyStyles.setProperty('--accent-color', 'transparent');
                break;
        }
        return result;
}

changeCurrentColor(colors[randomColor]);
