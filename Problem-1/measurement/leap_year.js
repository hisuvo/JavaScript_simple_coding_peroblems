


function leapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0) {
        console.log(`${year} is a Leap Year`)
    } else {
        console.log(`${year} is not a Leap Year`)
    }
}
let year = 2024;

let leap_year = leapYear(year)