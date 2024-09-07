
let heights = [73, 34, 65, 56, 67, 78, 58, 66, 59]

function maxHeight(numbers) {
    let min = numbers[0]
    
    for(let num of numbers) {
        if(min > num) {
            min = num;
        }
    }

    return min
}

let result = maxHeight(heights);
console.log("Minimum height is",result)
