var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// 1. Wins: (# of times the user has guessed the letter correctly)
 var wins = 0;       
 // 2. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
 var losses = 0;
// 3. Guesses Left: (# of guesses left. This will update)
 var guessesLeft = 6;
 var guessChoices = [];

// This is selecting the computers guess.
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
  
// 5. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
   
// 6. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). -->

//______________________________________________________________________________________________________


// what are your variables?
// meaning what variables need to persist throughout the game?
// ex. win/loss record, number of guesses, your available
// game choices. a, b, c, d, etc.
// what are my events?
// what happens during the event?
// conditionals in event that shape if the game continues,
// if the user loses, and if the user wins, and 
// determining these things. 
// When the user loses what happens?
// When the user wins what happens?
// var reset = function() {}



// Start of the event to game and captures the keys.
document.onkeyup = function (event) {
    userGuess = event.key;
    console.log(computerGuess); 
    // pick the computer guess
    if (computerGuess === userGuess ) {
        console.log ("You got it right!");
        console.log(wins = +1)
        console.log(losses = +1);
    }
}

var userText = document.getElementById("Wins:");
var userText = document.getElementById("Losses:");
var userText = document.getElementById("Guesses:");

