// Task-5:

function monthlySaving(allPayment, liveingCost) {

    if(!Array.isArray(allPayment)) {
        return "Invalid input";
    } 
    if(typeof liveingCost !== "number") {
        return "Invalid input";
    }

    let sum = 0;

    for(let payment of allPayment) {
        if(payment > 3000) {
            sum -= payment * 20/100;
        }
        sum += payment;
    }

    const totalCost = sum - liveingCost;

    if(totalCost < 0) {
        return "Earn More"
    }

    return `Saving cost: ${totalCost}`;
}


console.log(monthlySaving([1000,1400,3000], 5400))