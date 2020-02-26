"use strict";


var jokes = [
    {
        joke: "Q: What has one head, one foot and four legs?",
        answer: "A: A Bed"
    },

    {
        joke: "Q: Did you hear the joke about the roof?",
        answer: "A: Never mind, it's over your head!"
    },

    {
        joke: "Q: How many letters are in The Alphabet?",
        answer: "A: There are 11 letters in The Alphabet"
    },

    {
        joke: "Q: How can you spell cold with two letters?",
        answer: "A: IC (icy)"
    },

    {
        joke: "Q: What state is surrounded by the most water?",
        answer: "A: Hawaii (this is really just a trick riddle)"
    },

    {
        joke: "Q: David's father had three sons: Snap, Crackle, and ?",
        answer: "A: David!"
    },

    {
        joke: "Q: If you were in a race and passed the person in 2nd place, what place would you be in?",
        answer: "A: 2nd place!"
    },

    {
        joke: "Q: What is the center of gravity?",
        answer: "A: The letter V!"
    },

    {
        joke: "Q: What English word has three consecutive double letters?",
        answer: "A: Bookkeeper"
    },

    {
        joke: "Q: What has a head, a tail, is brown, and has no legs?",
        answer: "A: A penny!"
    },

    {
        joke:"Q: The turtle took two chocolates to Texas to teach Thomas to tie his boots. How many T's in that?",
        answer:"A: There are 2 T's in THAT!"
    },

    {
        joke:"Q: What goes up, but never comes down?",
        answer:"A: Your age!"
    },

    {
        joke:"Q: What gets bigger and bigger as you take more away from it?",
        answer:"A: A hole!"
    },

    {
        joke:"Q: How many months have 28 days?",
        answer: "A: All of them!"
    },

    {
        joke:"Q: Can you spell rotted with two letters?",
        answer:"A: DK (decay)"
    },

    {
        joke:"Q: How many books can you put into an empty backpack?",
        answer: "A: One! After that it's not empty."
    },

    {
        joke:"Q: Which weighs more, a ton of feathers or a ton of bricks?",
        answer: "A: Neither, they both weigh a ton!"
    },

    {
        joke:"Q: Does your shirt have holes in it?",
        answer: "A: No, then how did you put it on?"
    },

    {
        joke:"Q: What starts with a P and ends with an E and has a million letters in it?",
        answer:"A: Post Office!"
    },

    {
        joke: "Q: When does a cart come before a horse?",
        answer:"A: In the dictionary!"
    },

    {
        joke:"Q: What is full of holes but can still hold water?",
        answer: "A: A sponge!"
    },

    {
        joke:"Q: What has two hands, a round face, always runs, but stays in place?",
        answer:"A: A clock!"
    },

    {
        joke:"Q: Where does success come before work?",
        answer: "A: In the dictionary!"
    },

    {
        joke:"Q: What breaks when you say it?",
        answer: "A: Silence!"
    },

    {
        joke:"Q: How many peas are there in a pint?",
        answer:"A: There is one 'P' in a 'pint'."
    }
];




function randomJoke(objectArray){

    // // Get random joke from array of objects
    var randomIndex = Math.floor(Math.random() * (jokes.length- 1));

    // Replace the empty <p> in HTML document with randomly generated fortune
    document.getElementById('joke').innerHTML = jokes[randomIndex].joke;

    // Replace the empty <p> in HTML document with randomly generated fortune
    document.getElementById('answer').innerHTML = jokes[randomIndex].answer;


}

randomJoke(jokes);

// when you click on cookiePic, it generates and displays a new random joke and answer
var cookiePic = document.getElementById('default-cookie-pic');

cookiePic.addEventListener('click', function(event) {

    var randomIndex = Math.floor(Math.random() * (jokes.length- 1));

    // Replace the empty <p> in HTML document with randomly generated fortune
    document.getElementById('joke').innerHTML = jokes[randomIndex].joke;

    // Replace the empty <p> in HTML document with randomly generated fortune
    document.getElementById('answer').innerHTML = jokes[randomIndex].answer;

}, false);