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

<<<<<<< HEAD
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
=======
const getCostsForCrop = (cropDetails) => {
    return (cropDetails.crop.costs) * cropDetails.numCrops;
};

// SECOND ASSIGNMENT -> GET REVENUE FOR CROPS //

const getRevenueForCrop = (cropDetails) => {
    return (getYieldForCrop(cropDetails) * cropDetails.crop.salesPrice);
};

// THIRD ASSIGNMENT -> GET PROFIT FOR CROPS //

const getProfitForCrop = (cropDetails) => {
    return (getRevenueForCrop(cropDetails)) - getCostsForCrop(cropDetails)
}
>>>>>>> 839368c78d9c317c2f866272ea6b6ad4723d766d

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
<<<<<<< HEAD
    getTotalProfit
=======
    // getTotalProfit
>>>>>>> 839368c78d9c317c2f866272ea6b6ad4723d766d
};