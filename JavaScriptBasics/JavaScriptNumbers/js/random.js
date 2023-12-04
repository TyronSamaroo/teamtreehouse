// Collect input from a user
// Convert the input to a number 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
//The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
let userInputLow = +prompt("Enter a low number") //Number from 1 to user input 
let userInputHigh = +prompt("Enter a high number") //Number from 1 to user input 



if ( userInputLow && userInputHigh) {
   
    /* 
    This make sure number generated is in the right range. 
        - Math.random -> num between 0 and 1 not including 1 
        - Need number to be lowest to be 0 + Lower (AKA Base Number cant be lower than that)
        - Need number to be highest number not higher. If I add UserInput Low I gotta make sure to remove it from highnumb
        Ex.  2 -> 6 
            6 - 2 = 4 + 1 -> 5 (Max floor gives will be 4.999 which will give 4)
            Then Ill have add low which is 2 to get max 6
            If random is 0 it will return lowestInput
    */
    let lowestDiff = userInputHigh - userInputLow + 1;
     // Use Math.random() and the user's number to generate a random number
    let randomGenNum = Math.floor(Math.random() * lowestDiff) + userInputLow;

    // Create a message displaying the random number
    // Attempting to put number to page 
    document.querySelector('main').innerHTML = `Your random number between ${userInputLow} and  ${userInputHigh} is......... ${randomGenNum}`;
} else {
    document.querySelector('main').innerHTML = `Your entry is not a number. Please try again.`;
    
}