/**
 * 
 * Task-9:(Remove Duplicates from an Array)
 * 
 * Create a function removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed.
 * 
 */

function removeDuplicates (numbers) {
    let newArray = [];

    for(let number of numbers) {
        if(!newArray.includes(number)) {
            newArray.push(number);
        }
    }
    return newArray;
}

let aray = [1, 1, 1, 1, 1, 2, 3, 4, 3, 2, 3, 2, 3, 2, 3, 2]

let result = removeDuplicates(aray)

console.log("new Array", result)