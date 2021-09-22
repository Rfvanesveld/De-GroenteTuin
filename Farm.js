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

// FIFTH ASSIGNMENT -> GET YIELD FOR PLANT WITH TWO ENVIRONMENTAL FACTORS //

const getYieldForPlantWithFactors = (plant, environmentalFactors) => {
    const sunFactor = plant.factors.sun[environmentalFactors.sun] / 100 + 1;
    const windFactor = plant.factors.wind[environmentalFactors.wind] / 100 + 1;

    if (environmentalFactors.sun === "low") { sunDetails = plant.yield * sunFactor }

    else if (environmentalFactors.sun === "high") { sunDetails = plant.yield * sunFactor }

    else { sunDetails = plant.yield }

    if (environmentalFactors.wind === "low") { sunAndWindDetails = sunDetails * windFactor }

    else if (environmentalFactors.wind === "high") { sunAndWindDetails = sunDetails * windFactor }

    else { sunAndWindDetails = sunDetails * windFactor }
    return sunAndWindDetails
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithFactors
};
