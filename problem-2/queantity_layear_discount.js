
/*
	1.products layer is upto 100 pice ---> 100tk.
	2.layer is 101 to 200 pice ---> 95tk.
	3.layer is 201 to 300 pice ---> 80tk.
	4.layer is 301 to 500 pice ---> 70tk.

	Here all discount will be only enable for every layer

*/


// Sulation:

function layearProductDiscunt (pices) {
	let fist100ProductPrice = 100;
	let second100ProductPrice = 95;
	let third100ProdcutPrice = 80;
	let fourht100ProductPrice = 70;

	if(pices <= 100) {
		 let totalPrice = pices * fist100ProductPrice;
		 return totalPrice;

	} else if (pices <= 200) {
		let remainQueantity = pices - 100;
		let quentityPeice = remainQueantity * second100ProductPrice;
		let totalPrice = fist100ProductPrice * 100 + quentityPeice;
		return totalPrice;

	} else if (pices <= 300) {
		let remainQueantity = pices - 200;
		let quentityPeice = remainQueantity * third100ProdcutPrice;
		let totalPrice = ( fist100ProductPrice + second100ProductPrice ) * 100 + quentityPeice;
		return totalPrice;

	} else {
		let remainQueantity = pices - 300;
		let quentityPeice = remainQueantity * fourht100ProductPrice;
		let totalPrice = ( fist100ProductPrice  + second100ProductPrice  + third100ProdcutPrice ) * 100 + quentityPeice;
		return totalPrice;

	}
}

let total = layearProductDiscunt(305);
console.log("Total price is :", total, "tk.")