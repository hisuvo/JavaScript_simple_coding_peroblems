// Task-1:

function calculateTax(income, expenses) {

	if(income <= 0 || expenses <= 0 || income <= expenses) {
		return "Invalid Input"
	}

	const difference = income - expenses;
	const isTax = difference * 20/100;

	return isTax;
}

console.log(calculateTax(6000, 15000))

