
/*

Task-3:
	Your task is to calculate the total budget required to buy electronics:

	    laptop = 35000 tk
	    tablet = 15000 tk
	    mobile = 20000 tk

	Write a JavaScript function named calculateElectronicsBudget that takes
	in the number of laptop, tablets, and mobile and returns the total 
	money required.

*/

// Solution: 

function claculateElectronicsBuget(laptopQueantity, tabletQuantity, mobileQuantity) {
	const perLaptoopPrice = 35000;
	const perTabletPrice = 15000;
	const perMobilePrice = 20000;
	
	const totalLaptopPrice = perLaptoopPrice * laptopQueantity;
	const totalTabletPrice = perTabletPrice * tabletQuantity;
	const totalMobilePrice = perMobilePrice * mobileQuantity;

	let totalElectronicesPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

	return totalElectronicesPrice;
}

const laptopPices = 5;
const tabletPices = 1;
const mobilePices = 5;

let total = claculateElectronicsBuget(laptopPices, tabletPices, mobilePices);

console.log("Total Electronices Price is: " + total + " tk");




/// solution way-2
//----------------

function calculateElectronicsBudget(items) {
    const prices = {
        laptop: 35000,
        tablet: 15000,
        mobile: 20000
    };

    let totalBudget = 0;

    for (let item in items) {

    	if(prices[item]) {

    		totalBudget = totalBudget + (prices[item] * items[item])

    	}

    }

    return totalBudget;
}

let deviceQuentity = { laptop: 2, tablet: 3, mobile: 1 };

const totalCost = calculateElectronicsBudget(deviceQuentity);

console.log("Total budget required: " +  totalCost + " tk");
