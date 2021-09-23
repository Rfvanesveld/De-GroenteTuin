const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantWithFactors,
    getYieldForCropWithFactors
}
    = require("./Farm");

// TESTING -> GET YIELD FOR PLANT //

describe("getYieldForPlant", () => {
    const corn = {
        name: "Corn",
        yield: 30,
    };
    test("TEST -> GET YIELD FOR PLANT WITH NO ENVIRONMENTAL FACTORS", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// TESTING -> GET YIELD FOR CROP //

describe("getYieldForCrop", () => {
    test("TEST -> GET YIELD FOR CROP WITH NO ENVIRONMENTAL FACTORS", () => {
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

// TESTING -> GET TOTAL YIELD //

describe("getTotalYield", () => {
    test("TEST -> CALCULATE TOTAL YIELD WITH MULTIPLE CROPS", () => {
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

    test("TEST -> CALCULATE TOTAL YIELD WITH 0 AMOUNT", () => {
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
    test("TEST -> GET THE COST OF CUCUMBERS", () => {
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
    test("TEST -> GET REVENUE FOR SPINACH", () => {
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
    test("TEST -> GET PROFIT FOR TOMATOES", () => {
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
    test("TEST -> GET TOTAL REVENUE FOR THREE DIFFERENT CROPS/VEGETABLES", () => {
        expect(getTotalProfit({ cropList })).toBe(10420)
    })
})

// FIFTH ASSIGNMENT -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS //

// TEST 5.1 -> FACTORS ARE: HIGH SUN & MEDIUM WIND //

describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "Corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    }
    const environmentalFactors = {
        sun: "high",
        wind: "medium",
    };

    test("TEST -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (HIGH SUN & MEDIUM WIND", () => {
        expect(getYieldForPlantWithFactors(corn, environmentalFactors)).toBe(45);
    });
});

// TEST 5.2 -> FACTORS ARE: LOW SUN & HIGH WIND //

describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "Corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    }
    const environmentalFactors = {
        sun: "low",
        wind: "high",
    };

    test("TEST -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (LOW SUN & HIGH WIND)", () => {
        expect(getYieldForPlantWithFactors(corn, environmentalFactors)).toBe(22.5);
    });
});

// SIXTH ASSIGNMENT -> GET YIELD FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

// TEST 6.1 -> FACTORS ARE: LOW SUN & MEDIUM WIND //

describe("getYieldForCropWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 5,
        factors: {
            sun: {
                low: -20,
                medium: 10,
                high: 40,
            },
            wind: {
                low: -40,
                medium: 10,
                high: 60,
            },
        },
    };

    const input = {
        crop: corn,
        numCrops: 20,
    };

    const environmentalFactors = {
        sun: "low",
        wind: "medium",
    };

    test("TEST -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        expect(getYieldForCropWithFactors(input, environmentalFactors)).toBe(88);
    });
});

// TEST 6.2 -> FACTORS ARE: HIGH SUN & HIGH WIND //

describe("getYieldForCropWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 5,
        factors: {
            sun: {
                low: -20,
                medium: 10,
                high: 40,
            },
            wind: {
                low: -40,
                medium: 10,
                high: 60,
            },
        },
    };

    const input = {
        crop: corn,
        numCrops: 20,
    };

    const environmentalFactors = {
        sun: "high",
        wind: "high",
    };

    test("TEST -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        expect(getYieldForCropWithFactors(input, environmentalFactors)).toBe(224);
    });
});