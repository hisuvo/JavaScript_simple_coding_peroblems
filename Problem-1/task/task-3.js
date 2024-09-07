/**
 * Task-3:
    Write a function to count the number of vowels in a string.
 */

// Solution : 

function vowelCounter (string) {
    let letter = []
    for(let vowels   of string) {
        let vowel = vowels.toLowerCase();
        if(vowel === "a"||vowel === "e"||vowel === "i"||vowel === "o"||vowel === "u") {
            letter.push(vowel)
        }
    }
    return letter.length;
}

let string = "SUVO DATTA"
let vowel = vowelCounter(string);

console.log("Vowel Numbers is :", vowel)



// Second way :

function countVowels(str) {
    let count = 0; // vowels number counter
    let vowels = ["a", "e", "i", "o", "u"]; // vowels list
    let txts = str.toLowerCase();// convert all letter lowercase

    //---------------
    // for--of loop
    //---------------
    for(let txt of txts){
        if(vowels.includes(txt)){
            count++
        }
    }

    //-----------
    //  for loop
    //-----------
    // for(let i = 0; i < txts.length; i++) {
    //     if(vowels.includes(txts[i])) {
    //         count++
    //     }
    // }

    return count
}

let text = "I LOVE JAVASCRIPT.MY FIRST PROGRAMMING LANGUAGE IS THE JAVASCRIPT";
let outPut = countVowels (text);
console.log("Vowels Number is :", outPut)