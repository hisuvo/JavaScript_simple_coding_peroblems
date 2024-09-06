// Remove dublicate items from in array

function noDuplecate (array) {
    let unique = [];
    for(let item of array) {
        if(unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}

// Srting 
// let uniqueArray = ["kabul", "tabul", "labul", "tabul", "kabul", "cabul", "nabul"];

// Number 
let uniqueArray = [12, 23, 123, 23,23, 23, 345, 56, 67,34,23,34, 123, 345];

let no_dublicate = noDuplecate(uniqueArray);

console.log(no_dublicate)