// GET YIELD FOR PLANT //

const getYieldForPlant = (input) => input.yield;

// GET YIELD FOR CROP //

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

// GET TOTAL YIELD //

const getTotalYield = ({ crops }) => {
    let totalYieldOfAllCrops = 0;

    crops.forEach(currentCrops => {
        totalYieldOfAllCrops += getYieldForCrop(currentCrops)
    });
    return totalYieldOfAllCrops
}

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

const getYieldForCropWithFactors = (input, environmentalFactors) =>
    Math.round(getYieldForPlantWithFactors(input.crop, environmentalFactors)
        * input.numCrops);

// SEVENTH ASSIGNMENT -> GET TOTAL YIELD WITH TWO ENVIRONMENTAL FACTORS //

const getTotalYieldWithFactors = ({ crops }, environmentalFactors) => {
    let totalYieldOfAllCrops = 0;

    crops.forEach(input => {
        totalYieldOfAllCrops += getYieldForCropWithFactors(input, environmentalFactors)
    });
    return totalYieldOfAllCrops;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithFactors,
    getYieldForCropWithFactors,
    getTotalYieldWithFactors
};
