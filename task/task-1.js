/**
 * Task-1:
    Write a function to convert temperature from Celsius to Fahrenheit.
 */

// Formola is (0°C × 9/5) + 32 = 32°F
 

// Solution:

function celsiusToFahrenheit(celsious) {

    if(typeof celsious === "undefined") {
        return 0
    } else {
        return fahrenheit = (celsious * (9 / 5)) + 32
        
    }
    
}

let celsious = 38;
let temperature = celsiusToFahrenheit(celsious);
console.log(temperature,"F")