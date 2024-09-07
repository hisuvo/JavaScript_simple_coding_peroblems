
/**
 * we want to create cheair, table and bad. So we need to difference measurment wood for per product
 * 
 * chair --> 30cft;
 * table --> 50 cft;
 * bed ---> 70 cft;
 * 
*/

function woodCalculator(cahirQuentity, tableQuentity, badQuentity) {
    const perchair = 30;
    const pertable = 50;
    const perbed = 70;

    const chairWood = perchair * cahirQuentity;
    const tableWood = pertable * tableQuentity;
    const bedWood = perbed * badQuentity;

    const totalNeedWood = chairWood + tableWood + bedWood;

    return totalNeedWood;
}

let chair = 0;
let table = 0;
let bed = 1 ;

let woodNeed = woodCalculator(chair, table, bed);
console.log(woodNeed)