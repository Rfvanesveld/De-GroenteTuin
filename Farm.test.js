const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit }
    = require("./Farm");

// TESTING - GET YIELD FOR PLANT //

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// TESTING - GET YIELD FOR CROP //

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

// TESTING - GET TOTAL YIELD //

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// FIRST ASSIGMENT -> GET THE COST PER CROP //

describe("getCostsForCrop", () => {
    const cucumber = {
        name: "Cucumber",
        yield: 3,
        costs: 3,
    }
    const input = {
        crop: cucumber,
        numCrops: 25,
    }
    test("GET THE COST OF CUCUMBERS", () => {
        expect(getCostsForCrop(input)).toBe(75)
    })
})

// SECOND ASSIGNMENT -> GET REVENUE FOR CROPS //

describe("getRevenueForCrop", () => {
    const spinach = {
        name: "Spinach",
        salesPrice: 5,
        yield: 5
    }
    const cropDetails = {
        numCrops: 10,
        crop: spinach,
    }
    test("GET REVENUE FOR SPINACH", () => {
        expect(getRevenueForCrop(cropDetails)).toBe(250)
    })
})

// THIRD ASSIGNMENT -> GET PROFIT FOR CROPS //

describe("getProfitForCrop", () => {
    const tomato = {
        name: "Tomato",
        salesPrice: 5,
        costs: 2,
        yield: 4
    }
    const cropDetails = {
        numCrops: 20,
        crop: tomato,
    }
    test("GET PROFIT FOR TOMATOES", () => {
        expect(getProfitForCrop(cropDetails)).toBe(360)
    })
})

// FOURTH ASSIGNMENT -> GET TOTAL PROFIT //

describe("getTotalProfit", () => {
    const asparagus = {
        name: "Asparagus",
        salesPrice: 10,
        costs: 4,
        yield: 6
    }
    const eggplant = {
        name: "Eggplant",
        salesPrice: 15,
        costs: 5,
        yield: 5
    }
    const carrots = {
        name: "Carrots",
        salesPrice: 8,
        costs: 2,
        yield: 20
    }
    const cropList = [
        { crop: asparagus, numCrops: 20 },
        { crop: eggplant, numCrops: 20 },
        { crop: carrots, numCrops: 50 }
    ];
    test("GET TOTAL REVENUE FOR THREE DIFFERENT CROPS/VEGETABLES", () => {
        expect(getTotalProfit({ cropList })).toBe(10420)
    })
})

