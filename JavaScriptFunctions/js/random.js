/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const randomNumber = (lower, upper ) => {
    if ( isNaN(lower) || isNaN(u=upper)) {
        throw Error('Both arugments must be numbers')
    }
    return Math.floor(Math.random() * (upper -  lower + 1)) + lower; //Math.random is 0 to ~~~.99
}


// Call the function and pass it different values
console.log(randomNumber(5, 20));
console.log(randomNumber(1, 3));
console.log(randomNumber(100, 200));
console.log(randomNumber(100, 'a'));
