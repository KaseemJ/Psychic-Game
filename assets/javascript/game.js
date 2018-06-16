var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var htmlWins = document.getElementById("wins");
var htmlLosses = document.getElementById("losses");
var htmlGuesses = document.getElementById("guesses");
var htmlsoFar = document.getElementById("soFar");
// manipilating the DOM to add content next to the <p> tags in the browser
// .innerHTML adds the zeros to above var's
htmlWins.innerHTML = 0;
htmlLosses.innerHTML = 0;
htmlGuesses.innerHTML = 0;
htmlsoFar.innerHTML = 0;
console.log("htmlsoFar", htmlsoFar.innerHTML);
console.log("htmlWins", htmlWins.innerHTML);
console.log("htmlLosses", htmlLosses.innerHTML);
console.log("htmlGuesses", htmlGuesses.innerHTML);


// 1. Wins: (# of times the user has guessed the letter correctly)
var wins = 0;
// 2. Losses: (if guessesLeft = 0 losses += 1 )
var losses = 0;
// 3. Guesses Left: (# of guesses left. This will update)
var guessesLeft = 6;
// All of the wrong selection by the user.
var guessChoices = [];

// This is selecting the computers guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// 5. When the player wins, increase the Wins counter and start the game over again (without refreshing the page)
// Start of the event to game and captures the keys.
// User is selecting key choice/guesses.

document.onkeyup = function (event) {


    userGuess = event.key;
    console.log(computerGuess);
    // pick the computer guess/choosing the right answer
    if (computerGuess === userGuess) {
        alert("You got it right!");
        wins = wins + 1;
        console.log("These are wins " + wins);
        reset()

        // when user doesn't have the correct choice/ choosing the wrong answer.
    } else if (computerGuess !== userGuess) {
        guessesLeft--;
        alert("Try again");

        // guessChoices is collection of wrong guesses
        guessChoices.push(userGuess);
        console.log(guessChoices);

        // Losses update
        // if guessChoices.length(size of array) == 6
        // if guessesLeft = 0
        if (guessesLeft === 0) {
            losses = losses + 1;
            console.log("These are losses " + losses);
            reset()


        }
    }

}
// so if there a win or lose this function will reset to play again
var reset = function () {
// whenever there's a correct answer or you run out of guesses, the game will start over

// All of the wrong selection by the user.
    guessesLeft = 6;

// letters chosen by user
    guessChoices = [];

// This is selecting the computers guess.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

// 6. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). -->

// var i;
// for (i = 0; i < guessesLeft; i++) {







