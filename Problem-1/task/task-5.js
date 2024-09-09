/**
 * Task-5:
 * Create a function findLargest that takes an array of numbers and returns the largest number in the array. If the array is empty, the function should return undefined.
 */

//Solution:


function findLargest(numbers) {

    if(!Array.isArray(numbers)) {
        return "Not valile input."
    }

    let max = numbers[0];
    for(let number of numbers) {
        if(number > max) {
            max = number
        }
    }
    return max
}

let LargestNumber = findLargest (23)
console.log(LargestNumber)

let x = Math.max(12, 1000, 3, 43, 456, 100);

console.log(x)