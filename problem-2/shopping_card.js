
//we want to count total price with queantity of products

let products = [
		{name: "Olive Oile", price: 150, queantity: 4 },
		{name: "shampoo", price: 300, queantity: 5 },
		{name: "Face Wash", price: 340, queantity: 2 },
		{name: "shirt", price: 440, queantity: 3 },
		{name: "pant", price: 700, queantity: 4 },
		{name: "sum galss", price: 249, queantity: 1 }
	]

function productPrice(products) {
	let sum = 0;
	for(let product of products) {
		let perProductWithQueantity = product.price * product.queantity;
		sum += perProductWithQueantity
	}
	return sum;
}  

let total = productPrice(products);

console.log("Products Total price is : ", total,"tk.");