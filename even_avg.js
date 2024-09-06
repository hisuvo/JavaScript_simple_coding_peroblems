// Calculate the average of the even numbers in array

function averageEven(numbers) {
    if(numbers.length === 0) {
        return 0; // when numbers = [] then it's return 0
    }

    // new even array
    let evens = [];

    // collect even number by for__of loop
    for(let number of numbers) {
        if(number % 2 === 0) {
            evens.push(number)
        }
    }

    // total even sum
    let sum = 0;
    for(let even of evens ) {
        sum += even
    }

    // even average 
    let average = sum / evens.length
    return average;
}

let numbers = [12, 23, 34, 74, 65, 78, 45, 37, 1292]
let even = averageEven(numbers)
console.log("The even number is :", even)