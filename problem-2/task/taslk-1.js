/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137]
*/

// Solution :

const heights = [167, 190, 120, 165, 137]

function lowestNumberFinder (numbers) {
	let min = numbers[0];

	for (var i = numbers.length - 1; i >= 0; i--) {

		if(numbers[i] < min){
			min = numbers[i]

		}
	}

	return min;
} 

let lowerHeights = lowestNumberFinder(heights)
console.log("Lower heights Number is:", lowerHeights)