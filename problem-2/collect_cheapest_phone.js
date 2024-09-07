
//  How to search cheapest phone in the array Object

let phones = [
    {name:"sumsumg", Price: 2400, color: "Dark Blue", camera:"25px"},
    {name:"Nokia", Price: 3200, color: "Blck", camera:"50px"},
    {name:"Wolton", Price: 1400, color: "Blue", camera:"12px"},
    {name:"Iphone", Price: 12400, color: "Gray", camera:"125px"},
    {name:"Redmi", Price: 1600, color: "Dark Blue", camera:"25px"},
    {name:"Vivo", Price: 2000, color: "Dark Blue", camera:"25px"},
    {name:"Oppo", Price: 1900, color: "Blue", camera:"25px"}
]

function cheapsetPhone (phones) {
    let min = phones[0]
    for(let phone of phones) {
       if(phone.Price > min.Price) {
        min = phone
       }
    }
    return min
}

let cheap = cheapsetPhone(phones)
console.log("Cheapest Phone Price is ", cheap)