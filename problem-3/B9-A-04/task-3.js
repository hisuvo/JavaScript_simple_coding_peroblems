// Task -3:


function deletedInvalid (array) {
	if(!Array.isArray(array)) {
		return "Invalid Array"
	}

	let newArray = [];

	for(let i = 0; i < array.length; i++) {
		let item = array[i];
		if(typeof item === "number" && !isNaN(item)) {
			newArray.push(item)
		}
	}
	return newArray
}


let inputArray = [1, 2, NaN, undefined]

console.log(deletedInvalid(inputArray))
