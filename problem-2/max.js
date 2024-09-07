//Who is get maximum number

let tom = 345;
let kom = 256;
let jom = 440;

if(tom > kom && tom > jom) {
    console.log("Tom is get most number")
} else if (kom > tom && kom > jom) {
    console.log("Kom is get most number")
} else {
    console.log("Jom is get most number")
}


function maxNumber (num1, num2, num3, num4) {
    let maxNum = Math.max(num1, num2, num3, num4);
    return maxNum;
}

let result = maxNumber(12, 23, 34, 45);
console.log(result)
