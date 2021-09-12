// GET YIELD FOR PLANT //

const getYieldForPlant = (plant) => plant.yield;

// GET YIELD FOR CROP //

const getYieldForCrop = (cropDetails) => cropDetails.crop.yield * cropDetails.numCrops;

// GET TOTAL YIELD //

const getTotalYield = ({ crops }) => {
    const getYieldofAllCrops = crops.map(crop => getYieldForCrop(crop));
    return getYieldofAllCrops.reduce((x, y) => x + y)
};

// FIRST ASSIGMENT -> THE COST PER CROP //

const getCostsForCrop = (details) => {
    const costPerCrop = details.crop.costs;
    return costPerCrop * details.numCrops;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit
};