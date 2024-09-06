// Inch to Feet convert

// we know 12inch 1feet

function inchToFeet(inch) {
    let feet = inch / 12
    return feet;
}

let shuvoHeight = inchToFeet(60)

// console.log(shuvoHeight)


//Other way:

function inchToFeet1(inch){
    let feetint = parseInt(inch / 12)
    let feetfloat = inch % 12;
    return `Height is ${feetint} feet ${feetfloat} inch`
}

let suvoHeight = inchToFeet1(62)
console.log(suvoHeight)


// Other way:

function inchToFeet1(inch){
    let feetint = Number((inch / 12).toFixed(0))
    let feetfloat = inch - (feetint * 12);
    return `Height is ${feetint} feet ${feetfloat} inch`
}

let rajibHeight = inchToFeet1(62)
console.log(rajibHeight)
