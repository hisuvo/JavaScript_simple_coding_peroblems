/*

Simple calculator 

*/




// For addition:
function add(num1, num2) {
	let sum = num1 + num2;
	return sum;
}

// For subtract:
function subtract(num1, num2) {
	let sum = num1 - num2;
	return sum;
}

// For Multiply
function multiply(num1, num2) {
	let sum = num1 * num2;
	return sum;
}

// For Divisions
function division(num1, num2) {
	let sum = num1 / num2;
	return sum;
}

// here function operator parameter disurb a function difenation 
function calculateFunc (a, b, operator) {
	if(operator === "add") {
		let result = add(a, b);
		return result

	} else if(operator === "multiply") {
		let result = multiply(a, b);
		return result

	}else if (operator === "subtract") {
		let result = subtract(a, b);
		return result

	} else if (operator === "division") {
		return division(a, b);

	} else {
		return`Onle add, subtract, multiply and division will be work`
	}
} 

let result = calculateFunc (20, 4, "divison");

console.log("Total value is :", result);
