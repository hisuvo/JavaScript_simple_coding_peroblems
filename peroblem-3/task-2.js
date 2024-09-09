//Task-2:

function checkName(str) {
	if(typeof str !== "string") {
		return "Invalid";
	}

	let goodLetter = ["a", "y", "i", "e", "o", "u", "w"]

	let nameEndLetter = str[str.length-1].toLowerCase()

	if(goodLetter.includes(nameEndLetter)) {
		return "Good Name";
	} 
	return "Bad Name";
}

let name = ["Rashed"];

console.log(checkName(name))
