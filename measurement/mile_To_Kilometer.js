// Miles to Kilometer


// We know 1 mile to 1.60934 kilometer
function mileToKilometer(mile) {
    let isKilometer = parseInt(mile * 1.60934);
    let isMile =  mile % isKilometer
    return `Total distence is ${isKilometer} kilometer ${isMile} mile`
}

let distance = mileToKilometer(4);

console.log(distance)