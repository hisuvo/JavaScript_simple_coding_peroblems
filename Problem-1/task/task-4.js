/**
 * Task-4:
 * Write a JavaScript function called sumArray that takes an array of numbers as an argument and returns the sum of all the numbers in the array. If the array is empty, the function should return 0.
 */


// Solution:

function sumArray (numbers) {
    if(!Array.isArray(numbers) ) {
        return "Input not valid.";
        
    } else {
        for(let number of numbers) {
            if(typeof number !== "number") {
                return "Please enter the number";
            }
        }
    }

    let result = numbers.reduce((curent, accent) => {
        return curent + accent;
    }, 0)

    return result;
}

let sum = sumArray ("doctor of web");

console.log("The sum of all the numbers is : ", sum)