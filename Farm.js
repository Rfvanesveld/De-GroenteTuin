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

const getCostsForCrop = (cropDetails) => cropDetails.crop.costs * cropDetails.numCrops;

// SECOND ASSIGNMENT -> GET REVENUE FOR CROPS //

const getRevenueForCrop = (cropDetails) => getYieldForCrop(cropDetails) * cropDetails.crop.salesPrice;

// THIRD ASSIGNMENT -> GET PROFIT FOR CROPS //

const getProfitForCrop = (cropDetails) => getRevenueForCrop(cropDetails) - getCostsForCrop(cropDetails);

// FOURTH ASSIGNMENT -> GET TOTAL PROFIT //

const getTotalProfit = ({ cropList }) => {
    const profitOfAllCrops = cropList.map(crop => getProfitForCrop(crop));
    return profitOfAllCrops.reduce((x, y) => x + y);
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};