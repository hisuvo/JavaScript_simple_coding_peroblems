
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

console.log("Total Electronices Price is :", total);