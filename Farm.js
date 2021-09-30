// ASSIGNMENT 1 -> GET YIELD FOR PLANT //

const getYieldForPlant = (input) => input.yield;

// ASSIGNMENT 2 -> YIELD FOR CROP //

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

// ASSIGNMENT 3 -> GET TOTAL YIELD //

const getTotalYield = ({ crops }) => {
    let totalYieldOfAllCrops = 0;

    crops.forEach(currentCrops => {
        totalYieldOfAllCrops += getYieldForCrop(currentCrops)
    });
    return totalYieldOfAllCrops
};

// ASSIGNMENT 4 -> THE COST PER CROP //

const getCostsForCrop = (input) => input.crop.costs * input.numCrops;

// ASSIGNMENT 5 -> GET REVENUE FOR CROPS //

const getRevenueForCrop = (input) => getYieldForCrop(input) * input.crop.salesPrice;

// ASSIGNMENT 6 -> GET PROFIT FOR CROPS //

const getProfitForCrop = (input) => getRevenueForCrop(input) - getCostsForCrop(input);

// ASSIGNMENT 7 -> GET TOTAL PROFIT //

const getTotalProfit = ({ cropList }) => {
    const profitOfAllCrops = cropList.map(crop => getProfitForCrop(crop));
    return profitOfAllCrops.reduce((x, y) => x + y);
};

// ASSIGNMENT 8 -> GET YIELD FOR PLANT WITH TWO ENVIRONMENTAL FACTORS //

const getYieldForPlantWithFactors = (input, environmentalFactors) => {
    const sunFactor = input.factors.sun[environmentalFactors.sun] / 100 + 1;
    const windFactor = input.factors.wind[environmentalFactors.wind] / 100 + 1;

    if (environmentalFactors.sun === "low") { sunDetails = input.yield * sunFactor }

    else if (environmentalFactors.sun === "medium") { sunDetails = input.yield * sunFactor }

    else if (environmentalFactors.sun === "high") { sunDetails = input.yield * sunFactor }

    if (environmentalFactors.wind === "low") { sunAndWindDetails = sunDetails * windFactor }

    else if (environmentalFactors.wind === "medium") { sunAndWindDetails = sunDetails * windFactor }

    else if (environmentalFactors.wind === "high") { sunAndWindDetails = sunDetails * windFactor }

    return sunAndWindDetails
};

// ASSIGNMENT 9 -> GET YIELD FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

const getYieldForCropWithFactors = (input, environmentalFactors) =>
    getYieldForPlantWithFactors(input.crop, environmentalFactors)
        * input.numCrops;

// ASSIGNMENT 10 -> GET TOTAL YIELD WITH TWO ENVIRONMENTAL FACTORS //

const getTotalYieldWithFactors = ({ crops }, environmentalFactors) => {
    let totalYieldOfAllCrops = 0;

    crops.forEach(input => {
        totalYieldOfAllCrops += getYieldForCropWithFactors(input, environmentalFactors)
    });
    return totalYieldOfAllCrops;
};

// ASSIGNMENT 11 -> GET REVENUE FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

const getRevenueForCropWithFactors = (input, environmentalFactors) =>
    getYieldForCropWithFactors(input, environmentalFactors) * input.crop.salesPrice;

// ASSIGNMENT 12 -> GET PROFIT FOR CROPS WITH TWO ENVIRONMENTAL FACTORS //

const getProfitForCropWithFactors = (input, environmentalFactors) => 
getRevenueForCropWithFactors(input, environmentalFactors) - getCostsForCrop(input);

// ASSIGNMENT 13 -> GET TOTAL PROFIT FOR CROPLIST WITH TWO ENVIRONMENTAL FACTORS //

const getTotalProfitForCropsWithFactors = ({ cropList }, environmentalFactors) => {
    const profitOfAllCrops = cropList.map(crop => getProfitForCropWithFactors(crop, environmentalFactors));
    return profitOfAllCrops.reduce((x, y) => x + y);
};

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
    getTotalYieldWithFactors,
    getRevenueForCropWithFactors,
    getProfitForCropWithFactors,
    getTotalProfitForCropsWithFactors
};
