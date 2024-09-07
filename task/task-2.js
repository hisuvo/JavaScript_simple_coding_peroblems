/**
 * Task-2:
    You are given an array of numbers. Count how many times the a number is repeated in the array.

    sample-input: numbers = [5,6,11,12,98, 5]
    find: 5
    output: 2

    sample-input:
    numbers = [5,6,11,12,98, 5]
    find: 25
    output: 0
 */

// Solution :

// Using for--of loop

function repeatedItems(numbers, searchValue) {
    let getItem = [];
    for(let number of numbers) {
        if(number === searchValue) {
            getItem.push(number)
        }
    }
    return getItem.length;
}
let numbers = [5, 6, 11, 12, 98, 5];
let output = repeatedItems(numbers, 5);
let output1 = repeatedItems(numbers, 25);

console.log("Output : ", output)
console.log("Output : ", output1)


// Way-2(using while loop)

function countReapetNumber(numbers1, target) {
    let count = 0;
    let i = 0;
    while (i < numbers1.length) {
        if(numbers[i] === target) {
            count++
        }
        i++
    }
    return count
}
let numbers1 = [5, 6, 11, 5, 12, 98, 5, 11]
let target = 5;
let out_put = countReapetNumber(numbers1, target);
target = 11;
let out_put1 = countReapetNumber(numbers1, target);

console.log("Output : ",out_put)
console.log("Output : ",out_put1)


// way-3 (using for loop)

function countNumber(numbers2, target1) {
    let count = 0;
    for(let i = 0; i < numbers2.length; i++) {
        if(numbers2[i] === target1) {
            count++
        }
    }
    return count;
}

let numbers2 = [1, 23, 34, 45, 56, 23, 34, 23]

let target1 = 23;
let OutPut = countNumber(numbers2, target1);

    target1 = 34;
let OutPut1 = countNumber(numbers2, target1);


console.log("Output : ", OutPut)
console.log("Output : ", OutPut1)