
/*

Task -2: Find the friend with the smallest name.
 const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

// Solution:

const names = ["rahim", "robin", "rafi", "ron", "rashed", "jon"]


function smallestNameFinder (names) {
	let smallLength = names[0];

	for(let name of names) {

		if(name.length <= smallLength.length) {
			smallLength = name;
		}
	}

	return smallLength
} 

let smallestName = smallestNameFinder(names);
console.log("Smallest Name is :", smallestName)



// Solution way-2:
//----------------

let personNames = ["Rafiqe", "Safike", "Lafike", "Tofike", "Afike"];

let smallName = personNames.reduce((smaler, current) => {
	return (current.length < smaler.length) ? current: smaler;
}, personNames[0]);

console.log(smallName);