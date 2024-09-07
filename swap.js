
let number = 23;
let number1 = 12;
console.log(number, number1)

//--------------------------

// number = number1; // 12
// number1 = number; // 12
// console.log(number, number1)

//--------------------------

// Fixed this problem :

// let temp = number;

// number = number1;
// number1 = temp;

// console.log(number, number1)

//---------------------------

// Destructr way:

let x = 5;
let y = 7;
console.log(x, y);

[x, y] = [y, x]

console.log(x, y)



let name = "suvo Datta";
let age = 23;

console.log(name, age);

[name, age] = [age, name];

console.log(typeof name, typeof age)

console.log(Math.round(.45))
console.log(Math.ceil(0.45))

function mufunc(para , num) {
    console.log(para)
    console.log(num)
}

console.log(Math.pow(2, 3))

mufunc("suvo")

console.log(Math.sqrt(9))