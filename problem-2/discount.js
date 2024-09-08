/*
* per Product Queantity discount:
	1. Upto 100 --> 100tk.
	2. 101 To 200 --> 90tk.
	3. 200 upper --> 70tk. 
*/

function productQueantityPerDiscount (queantity) {
	if(queantity <= 100) {
		let productPeice = queantity * 100;
		return productPeice;
	} else if( queantity <= 200) {
		let productPrice = queantity * 90;
		return productPrice;
	} else {
		let productPeice = queantity * 80;
		return productPeice;
	}
}

let total = productQueantityPerDiscount(101);

console.log("Total Price is :", total, "tk.")