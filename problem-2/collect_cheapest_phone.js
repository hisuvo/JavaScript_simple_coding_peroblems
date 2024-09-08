
//  How to search cheapest phone in the array Object

let phones = [
    {name:"sumsumg", price: 24000, color: "Dark Blue", camera:"25px"},
    {name:"Nokia", price: 32000, color: "Blck", camera:"50px"},
    {name:"Wolton", price: 14000, color: "Blue", camera:"12px"},
    {name:"Iphone", price: 120400, color: "Gray", camera:"125px"},
    {name:"Redmi", price: 16000, color: "Dark Blue", camera:"25px"},
    {name:"Vivo", price: 20000, color: "Dark Blue", camera:"25px"},
    {name:"Oppo", price: 19000, color: "Blue", camera:"25px"}
]

function cheapsetPhone (phones) {
    let min = phones[0]
    for(const phone of phones) {
       if(phone.price < min.price) {
        min = phone
       }
    }
    return min
}

let cheap = cheapsetPhone(phones)
console.log("Cheapest Phone Price is ", cheap)