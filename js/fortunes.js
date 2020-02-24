"use strict";

// Array of all possible fortunes to be generated as well as type (denotes what image will be displayed with fortune)
var fortunes = [
    {fortune: "Today it's up to you to create the peacefulness you long for.", type: "good"},
    {fortune: "A friend asks only for your time not your money.", type: "good"},
    {fortune: "If you refuse to accept anything but the best, you very often get it.", type: "good"},
    {fortune: "A smile is your passport into the hearts of others.", type: "good"},
    {fortune: "A good way to keep healthy is to eat more Chinese food.", type: "good"},
    {fortune: "Your high-minded principles spell success.", type: "good"},
    {fortune: "Hard work pays off in the future, laziness pays off now.", type: "good"},
    {fortune: "Change can hurt, but it leads a path to something better.", type: "good"},
    {fortune: "Enjoy the good luck a companion brings you.", type: "good"},
    {fortune: "People are naturally attracted to you.", type: "good"},
    {fortune: "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", type: "good"},
    {fortune: "A chance meeting opens new doors to success and friendship.", type: "good"},
    {fortune: "You learn from your mistakes... You will learn a lot today.", type: "good"},
    {fortune: "If you have something good in your life, don't let it go!", type: "good"},
    {fortune: "What ever you're goal is in life, embrace it visualize it, and for it will be yours.", type: "good"},
    {fortune: "Your shoes will make you happy today.", type: "good"},
    {fortune: "You cannot love life until you live the life you love.", type: "good"},
    {fortune: "Be on the lookout for coming events; They cast their shadows beforehand.", type: "good"},
    {fortune: "Land is always on the mind of a flying bird.", type: "good"},
    {fortune: "Meeting adversity well is the source of your strength.", type: "good"},
    {fortune: "A dream you have will come true.", type: "good"},
    {fortune: "Our deeds determine us, as much as we determine our deeds.", type: "good"},
    {fortune: "Never give up. You're not a failure if you don't give up.", type: "good"},
    {fortune: "You will become great if you believe in yourself.", type: "good"},
    {fortune: "There is no greater pleasure than seeing your loved ones prosper.", type: "good"},
    {fortune: "You already know the answer to the questions lingering inside your head.", type: "good"},
    {fortune: "It is now, and in this world, that we must live.", type: "good"},
    {fortune: "You must try, or hate yourself for not trying.", type: "good"},
    {fortune: "You can make your own happiness.", type: "good"},
    {fortune: "The greatest risk is not taking one.", type: "good"},
    {fortune: "Love can last a lifetime, if you want it to.", type: "good"},
    {fortune: "Adversity is the parent of virtue.", type: "good"},
    {fortune: "Serious trouble will bypass you.", type: "good"},
    {fortune: "A short stranger will soon enter your life with blessings to share.", type: "good"},
    {fortune: "Now is the time to try something new.", type: "good"},
    {fortune: "Wealth awaits you very soon.", type: "good"},
    {fortune: "If you feel you are right, stand firmly by your convictions.", type: "good"},
    {fortune: "If winter comes, can spring be far behind?", type: "good"},
    {fortune: "You are very talented in many ways.", type: "good"},
    {fortune: "A stranger, is a friend you have not spoken to yet.", type: "good"},
    {fortune: "A new voyage will fill your life with untold memories.", type: "good"},
    {fortune: "You will travel to many exotic places in your lifetime.", type: "good"},
    {fortune: "Your ability for accomplishment will follow with success.", type: "good"},
    {fortune: "Nothing astonishes men so much as common sense and plain dealing.", type: "good"},
    {fortune: "Its amazing how much good you can do if you don't care who gets the credit.", type: "good"},
    {fortune: "Wouldn't it be ironic... to die in the living room?", type: "bad"}
];


var cookiePic = document.getElementById('default-cookie-pic');

// When cookie pic is clicked...
cookiePic.addEventListener('click', function(event) {

    // Generates a random index to grab fortune from array
    var randomIndex = Math.floor(Math.random() * (fortunes.length-1));

    // Replace the empty <p> in HTML document with randomly generated fortune
    var fortune = document.getElementById('fortune');
    fortune.innerHTML = fortunes[randomIndex].fortune;

    // Display the fortune paragraph
    fortune.style.display = 'inherit';
}, false);