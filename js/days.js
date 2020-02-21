"use strict";

// documents a random day of the year
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var randomMonth =(monthNames[Math.floor(Math.random() * 12)]);
var randomDay = Math.ceil(Math.random() * 29);


document.getElementById("randomDay").innerHTML = "Your lucky day is: " + randomMonth + " " + randomDay;

// add next 2 lines to the HTML

// <p id="randomDay"></p>

// <script src="js/days.js"></script>