
const laptops = [
		{name: "Hp", price:35445, model: "Elitbook459"},
		{name: "Lenavo", price:30445, model: "Lite23"},
		{name: "Wolton", price:20445, model: "Bango"},
		{name: "Mac", price:123445, model: "altra pro"},
		{name: "Asuse", price:33445, model: "buesness"}
	]

function cheapestLaptop(laptops) {
	let min = laptops[0];
	for(let laptop of laptops) {
		if(laptop.price < min.price) {
			min = laptop
		}
	}
	return min;
}

function premiomLaptop(laptops) {
	let max = laptops[0];
	for(let laptop of laptops) {
		if (laptop.price > max.price) {
			max = laptop;
		}
	}
	return max;
}

let cheap = cheapestLaptop(laptops);
let premiom = premiomLaptop(laptops);


console.log("Most premiom Laptop is",premiom);
console.log("Most cheap Laptop is", cheap);