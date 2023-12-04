// Collect input from a user
// Convert the input to a number 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
//The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
let userInput = +prompt("Enter random number to guess between 1 and your input") //Number from 1 to user input 



// Use Math.random() and the user's number to generate a random number
let randomGenNum = Math.floor(Math.random() * userInput) + 1;

// Create a message displaying the random number
// Attempting to put number to page 
document.querySelector('main').innerHTML = `Your random number is......... ${randomGenNum}`;