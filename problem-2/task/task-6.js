/*

	Task-6:
		How create Random Gmail number using JavaScript function 
		like: suvodatta4@gamil.com;

*/


function gmailCreator(infor) {
	if(typeof infor !== "object") {
		return 'please write text..'
	} else {
		let randomNumber = Math.ceil(Math.random()*10);
		let gmailId = infor["firstName"].toLowerCase() +infor["lastName"].toLowerCase()+ randomNumber + "@gmail.com";
		return gmailId;
	}
	

}

const person = {
	firstName: "SUVO",
	lastName: "DATTA"
}

let isGmail = gmailCreator(true)
console.log("Your Eamil Name is :", isGmail)

console.log(169.99*120)