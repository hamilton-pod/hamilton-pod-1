"use strict";

// documents a random day of the year
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var randomMonth =(monthNames[Math.floor(Math.random() * 12)]);
var randomDay = Math.ceil(Math.random() * 29);


document.getElementById("randomDay").innerHTML = randomMonth + " " + randomDay;




// when you click on cookiePic, it generates and displays a new random day
var cookiePic = document.getElementById('default-cookie-pic');

cookiePic.addEventListener('click', function(event) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var randomMonth =(monthNames[Math.floor(Math.random() * 12)]);
    var randomDay = Math.ceil(Math.random() * 29);

    document.getElementById("randomDay").innerHTML = randomMonth + " " + randomDay;



}, false);