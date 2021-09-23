// GET YIELD FOR PLANT //

const getYieldForPlant = (input) => input.yield;

// GET YIELD FOR CROP //

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

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

// FIFTH ASSIGNMENT -> GET YIELD FOR PLANT WITH TWO ENVIRONMENTAL FACTORS //

const getYieldForPlantWithFactors = (input, environmentalFactors) => {
    const sunFactor = input.factors.sun[environmentalFactors.sun] / 100 + 1;
    const windFactor = input.factors.wind[environmentalFactors.wind] / 100 + 1;

    if (environmentalFactors.sun === "low") { sunDetails = input.yield * sunFactor }

    else if (environmentalFactors.sun === "high") { sunDetails = input.yield * sunFactor }

    else { sunDetails = input.yield }

    if (environmentalFactors.wind === "low") { sunAndWindDetails = sunDetails * windFactor }

    else if (environmentalFactors.wind === "high") { sunAndWindDetails = sunDetails * windFactor }

    else { sunAndWindDetails = sunDetails * windFactor }
    return sunAndWindDetails
};

// SIXTH ASSIGNMENT -> GET YIELD FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

const getYieldForCropWithFactors = (input, environmentalFactors) => Math.round(getYieldForPlantWithFactors(input.crop, environmentalFactors)
    * input.numCrops);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithFactors,
    getYieldForCropWithFactors

};
