/**
 * 
 *Task-10: (Check if a Number is Prime)
 * Create a function isPrime that takes a number as input and returns true if the number is a prime number, and false otherwise.
 * 
 */

function isPrime (number) {
    if(number < 2) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrime(9))