
// Assiment Task-1;

function calculateMoney (numbers) {

	if(numbers < 0 || typeof numbers !== "number") {
		return "Invalid Number"
	}

	let ticktPrice = 120;
	let PerDayDatron = 500;

	let stepNumber = 8;
	let perStap = 50;
	let perDayStop = stepNumber * perStap

	const total =( numbers * ticktPrice )-(PerDayDatron + perDayStop)
	return total
}

let tickt = "-130"

console.log("Result is:" + calculateMoney(tickt))