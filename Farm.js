// TESTING - GET YIELD FOR PLANT //

const getYieldForPlant = (plant) => plant.yield;

// TESTING - GET YIELD FOR CROP //

const getYieldForCrop = (cropDetails) => cropDetails.crop.yield * cropDetails.numCrops;

// TESTING - GET TOTAL YIELD //

const getTotalYield = ({ crops }) => {
    const getYieldofAllCrops = crops.map(crop => getYieldForCrop(crop));
    return getYieldofAllCrops.reduce((x, y) => x + y)
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    // getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit
};