
let heights = [73, 34, 65, 56, 67, 78, 58, 66, 59]

function maxHeight(numbers) {
    let max = numbers[0]
    
    for(let num of numbers) {
        if(max < num) {
            max = num;
        }
    }

    return max
}

let result = maxHeight(heights);
console.log("Maximum height is ", result)