
/**
 * 
 * Shoping perproduct price;
 * shirt--> 400;
 * pant---> 900;
 * shoe--> 1200;
 * 
 */

function clothPrice(shirtQuantity, pantQuantity, shoseQuantity) {
    const perShirt = 400;
    const perPant = 900;
    const perShoe = 1200;

    const shirtTotalPrice = perShirt * shirtQuantity;
    const pantTotalPrice = perPant * pantQuantity;
    const shoseTotalPrice = perShoe * shoseQuantity;

    const totalClothPrice = shirtTotalPrice + pantTotalPrice + shoseTotalPrice;

    return totalClothPrice;
}

let shirtQuantity = 4;
let pantQuantity = 2;
let shoseQuantity = 4;

let result = clothPrice(shirtQuantity, pantQuantity, shirtQuantity);

console.log(`Total Cloth price ${result}`)