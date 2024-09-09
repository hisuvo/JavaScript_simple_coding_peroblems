/**
 * Task-8:
 * Create a function factorial that takes a non-negative integer as input and returns the factorial of that number. The factorial of 0 is 1
 */

function factorialFunc (number) {

    if(typeof number !== "number") {
        return "Invalid input! Please enter a number."
    }

    let integerNumber = parseInt(number);

    if(integerNumber === 0) {
        return 1;
    }

    if(integerNumber < 0) {
        return "Error it's not a positive number"
    } else {
        let sum = 1;
        for(let i = integerNumber; i > 0; i--) {
            sum *= i;    
        }
        return sum;
    }
    
}

let factorial = factorialFunc (-5)
console.log(factorial)