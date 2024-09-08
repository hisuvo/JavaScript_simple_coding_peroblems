
// Shopping price count 

let products = [
		{name: "Olive Oile", price: 150},
		{name: "shampoo", price: 300},
		{name: "Face Wash", price: 340},
		{name: "shirt", price: 440},
		{name: "pant", price: 700},
		{name: "sum galss", price: 249}
	]

function getTotalShopping(shops) {
	let sum = 0;
	for(let shop of shops) {
		sum += shop.price
	}
	return sum
}


const total = getTotalShopping(products)
console.log("Toral price is :", total, "taka")