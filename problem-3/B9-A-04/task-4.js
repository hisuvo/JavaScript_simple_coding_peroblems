// Task-4:


function password(obj) {
	const webSiteName = obj["siteName"];
	const userName = obj["name"];
	const birthYear = obj["birthYear"];

	if(birthYear < 1000 ) {
		return "Invalid"
	}
	const password = webSiteName + "#" + userName + "@" + birthYear;

	return password;
}


let inputObject = {name:"toky",birthYear:200,siteName:"Facebook"}

console.log(password(inputObject))