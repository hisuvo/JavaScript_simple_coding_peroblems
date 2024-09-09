
/**
 * Task-6:
 * Write a function reverseString that takes a string as input and returns the string reversed.
 * linke:
 *  console.log(reverseString("hello"));  // Output: "olleh"
 * 
 */


// Solution:

function reverseString (letters) {
    if(typeof letters !== "string") {
        return "please write text"
    }

    let text = "";

    for(let i = letters.length-1; i >= 0; i--) {
        text += letters[i]
    }
    
    return text.toLowerCase()
}

let reverseWord = reverseString ("34984054398");

console.log(reverseWord)