const {
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
}
    = require("./Farm");

// ASSIGNMENT 1 -> TESTING -> GET YIELD FOR PLANT //

describe("getYieldForPlant", () => {
    const corn = {
        name: "Corn",
        yield: 30,
    };
    test("TEST 1 -> GET YIELD FOR A PLANT", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

// ASSIGNMENT 2 -> TESTING -> GET YIELD FOR CROP //

describe("getYieldForCrop", () => {
    test("TEST 2 -> GET YIELD FOR A CROP", () => {
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

// ASSIGNMENT 3 -> TESTING -> GET TOTAL YIELD //

describe("getTotalYield", () => {
    test("TEST 3.1 -> CALCULATE TOTAL YIELD WITH MULTIPLE CROPS", () => {
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

    test("TEST 3.2 -> CALCULATE TOTAL YIELD WITH 0 AMOUNT", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// ASSIGNMENT 4 -> GET THE COST PER CROP //

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
    test("TEST 4 -> GET THE COST OF CUCUMBERS", () => {
        expect(getCostsForCrop(input)).toBe(75)
    })
});

// ASSIGNMENT 5 -> GET REVENUE FOR CROPS //

describe("getRevenueForCrop", () => {
    const spinach = {
        name: "Spinach",
        salesPrice: 5,
        yield: 5
    }
    const input = {
        numCrops: 10,
        crop: spinach,
    }
    test("TEST 5 -> GET REVENUE FOR SPINACH", () => {
        expect(getRevenueForCrop(input)).toBe(250)
    })
});

// ASSIGNMENT 6 -> GET PROFIT FOR CROPS //

describe("getProfitForCrop", () => {
    const tomato = {
        name: "Tomato",
        salesPrice: 5,
        costs: 2,
        yield: 4
    }
    const input = {
        numCrops: 20,
        crop: tomato,
    }
    test("TEST 6 -> GET PROFIT FOR TOMATOES", () => {
        expect(getProfitForCrop(input)).toBe(360)
    })
});

// ASSIGNMENT 7 -> GET TOTAL PROFIT FOR CROPLIST //

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
    test("TEST 7 -> GET TOTAL REVENUE FOR THREE DIFFERENT CROPS/VEGETABLES", () => {
        expect(getTotalProfit({ cropList })).toBe(10420)
    })
});

// ASSIGNMENT 8 -> GET YIELD FOR PLANT WITH TWO ENVIRONMENTAL FACTORS //

// TEST 8.1 -> FACTORS ARE: HIGH SUN & MEDIUM WIND //

describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "Corn",
        yield: 30,
        factors: {

            wind: {
                low: -50,
                medium: 0,
                high: 50,
            },

            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    }

    const environmentalFactors = {
        wind: "medium",
        sun: "high"
    };

    test("TEST 8.1 -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (HIGH SUN & MEDIUM WIND", () => {
        expect(getYieldForPlantWithFactors(corn, environmentalFactors)).toBe(45);
    });
});

// TEST 8.2 -> FACTORS ARE: LOW SUN & HIGH WIND //

describe("getYieldForPlantWithFactors", () => {
    const corn = {
        name: "Corn",
        yield: 30,
        factors: {

            wind: {
                low: -50,
                medium: 0,
                high: 50,
            },

            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        }
    }

    const environmentalFactors = {
        wind: "high",
        sun: "low"
    };

    test("TEST 8.2 -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (LOW SUN & HIGH WIND)", () => {
        expect(getYieldForPlantWithFactors(corn, environmentalFactors)).toBe(22.5);
    });
});

// ASSIGNMENT 9 -> GET YIELD FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

// TEST 9.1 -> FACTORS ARE: LOW SUN & MEDIUM WIND //

describe("getYieldForCropWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 5,
        factors: {
            sun: {
                low: -40,
                medium: 10,
                high: 60,
            },
            wind: {
                low: -40,
                medium: 10,
                high: 60,
            },
        }
    };

    const input = {
        crop: corn,
        numCrops: 20
    };

    const environmentalFactors = {
        sun: "low",
        wind: "medium"
    };

    test("TEST 9.1 -> GET YIELD FOR PLANT WITH ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        expect(getYieldForCropWithFactors(input, environmentalFactors)).toBe(66);
    });
});

// TEST 9.2 -> FACTORS ARE: HIGH SUN & HIGH WIND //

describe("getYieldForCropWithFactors", () => {
    const corn = {
        name: "corn",
        yield: 5,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -40,
                medium: 10,
                high: 60
            },
        }
    };

    const input = {
        crop: corn,
        numCrops: 10

    };

    const environmentalFactors = {
        wind: "high",
        sun: "high"
    };

    test("TEST 9.2 -> GET YIELD FOR CROP WITH ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        expect(getYieldForCropWithFactors(input, environmentalFactors)).toBe(128);
    });
});

// ASSIGNMENT 10 -> GET TOTAL YIELD WITH TWO ENVIRONMENTAL FACTORS //

// TEST 10.1 -> FACTORS ARE: LOW SUN & MEDIUM WIND //

describe("getTotalYieldWithFactors", () => {
    test("TEST 10.1 -> CALCULATE TOTAL YIELD WITH MULTIPLE CROPS & ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        const corn = {
            name: "Corn",
            yield: 5,
            factors: {

                wind: {
                    low: -40,
                    medium: 10,
                    high: 60
                },

                sun: {
                    low: -40,
                    medium: 10,
                    high: 60
                }
            }
        };
        const pumpkin = {
            name: "Pumpkin",
            yield: 4,
            factors: {
                wind: {
                    low: -40,
                    medium: 10,
                    high: 60
                },

                sun: {
                    low: -20,
                    medium: 10,
                    high: 40
                },
            },
        };

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 }
        ];

        const environmentalFactors = {
            wind: "medium",
            sun: "low"
        }
        expect(getTotalYieldWithFactors({ crops }, environmentalFactors)).toBe(68.2);
    });
});

// TEST 10.2 -> FACTORS ARE: HIGH SUN & HIGH WIND //

describe("getTotalYieldWithFactors", () => {
    test("TEST 10.2 -> CALCULATE TOTAL YIELD WITH MULTIPLE CROPS & ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        const corn = {
            name: "Corn",
            yield: 4,
            factors: {

                wind: {
                    low: -40,
                    medium: 10,
                    high: 60
                },

                sun: {
                    low: -20,
                    medium: 10,
                    high: 40
                },
            },
        };
        const pumpkin = {
            name: "Pumpkin",
            yield: 4,
            factors: {

                wind: {
                    low: -40,
                    medium: 10,
                    high: 60,
                },

                sun: {
                    low: -20,
                    medium: 10,
                    high: 40
                }
            }
        };
        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 10 }
        ];

        const environmentalFactors = {
            wind: "high",
            sun: "high"
        }
        expect(getTotalYieldWithFactors({ crops }, environmentalFactors)).toBe(179.2);
    });
});

// ASSIGNMENT 11 -> GET REVENUE FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

// TEST 11.1 -> 

describe("getRevenueForCropWithFactors", () => {
    const spinach = {
        name: "Spinach",
        salesPrice: 5,
        yield: 5,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 10,
                high: 40
            }
        }
    }

    const cropDetails = {
        numCrops: 10,
        crop: spinach,
    }
    const environmentalFactors = {
        wind: "medium",
        sun: "low"
    }

    test("TEST 11.1 -> GET REVENUE FOR SPINACH & ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        expect(getRevenueForCropWithFactors(cropDetails, environmentalFactors)).toBe(220)
    })
});

// TEST 11.2 -> 

describe("getRevenueForCropWithFactors", () => {
    const spinach = {
        name: "Spinach",
        salesPrice: 5,
        yield: 5,
        factors: {

            wind: {
                low: -20,
                medium: 10,
                high: 20
            },

            sun: {
                low: -20,
                medium: 10,
                high: 20
            }
        }
    }

    const cropDetails = {
        numCrops: 10,
        crop: spinach,
    }
    const environmentalFactors = {
        wind: "high",
        sun: "high"
    }

    test("TEST 11.2 -> GET REVENUE FOR SPINACH & ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        expect(getRevenueForCropWithFactors(cropDetails, environmentalFactors)).toBe(360)
    })
});

// ASSIGNMENT 12 -> GET PROFIT FOR CROP WITH TWO ENVIRONMENTAL FACTORS //

// TEST 12.1 ->

describe("getProfitForCropWithFactors", () => {
    const tomato = {
        name: "Tomato",
        salesPrice: 4,
        costs: 4,
        yield: 4,
        factors: {

            wind: {
                low: -40,
                medium: 20,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const input = {
        numCrops: 20,
        crop: tomato,
    }
    const environmentalFactors = {
        wind: "medium",
        sun: "low"
    }

    test("TEST 12.1 -> GET PROFIT FOR TOMATOES WITH ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        expect(getProfitForCropWithFactors(input, environmentalFactors)).toBe(227.2)
    })
});

// TEST 12.2 ->

describe("getProfitForCropWithFactors", () => {
    const tomato = {
        name: "Tomato",
        salesPrice: 4,
        costs: 4,
        yield: 4,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const input = {
        numCrops: 20,
        crop: tomato,
    }
    const environmentalFactors = {
        wind: "high",
        sun: "high"
    }

    test("TEST 12.2 -> GET PROFIT FOR TOMATOES WITH ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        expect(getProfitForCropWithFactors(input, environmentalFactors)).toBe(636.8)
    })
});

// ASSIGNMENT 13 -> GET TOTAL PROFIT FOR CROPLIST WITH TWO ENVIRONMENTAL FACTORS //

// TEST 13.1 ->

describe("getTotalProfitForCropsWithFactors", () => {
    const asparagus = {
        name: "Asparagus",
        salesPrice: 10,
        costs: 4,
        yield: 6,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const eggplant = {
        name: "Eggplant",
        salesPrice: 15,
        costs: 5,
        yield: 5,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const carrots = {
        name: "Carrots",
        salesPrice: 8,
        costs: 2,
        yield: 20,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const cropList = [
        { crop: asparagus, numCrops: 20 },
        { crop: eggplant, numCrops: 20 },
        { crop: carrots, numCrops: 50 }
    ];
    const environmentalFactors = {
        wind: "medium",
        sun: "low"
    }

    test("TEST 13.1 -> GET TOTAL PROFIT FOR THREE CROPS WITH ENVIRONMENTAL FACTORS (LOW SUN & MEDIUM WIND)", () => {
        expect(getTotalProfitForCropsWithFactors({ cropList }, environmentalFactors)).toBe(9136)
    })
});

// TEST 13.2 ->

describe("getTotalProfitForCropsWithFactors", () => {
    const asparagus = {
        name: "Asparagus",
        salesPrice: 10,
        costs: 4,
        yield: 6,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const eggplant = {
        name: "Eggplant",
        salesPrice: 15,
        costs: 5,
        yield: 5,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const carrots = {
        name: "Carrots",
        salesPrice: 8,
        costs: 2,
        yield: 20,
        factors: {

            wind: {
                low: -40,
                medium: 10,
                high: 60
            },

            sun: {
                low: -20,
                medium: 20,
                high: 40
            }
        }
    }
    const cropList = [
        { crop: asparagus, numCrops: 20 },
        { crop: eggplant, numCrops: 20 },
        { crop: carrots, numCrops: 50 }
    ];
    const environmentalFactors = {
        wind: "high",
        sun: "high"
    }

    test("TEST 13.2 -> GET TOTAL PROFIT FOR THREE CROPS WITH ENVIRONMENTAL FACTORS (HIGH SUN & HIGH WIND)", () => {
        expect(getTotalProfitForCropsWithFactors({ cropList }, environmentalFactors)).toBe(23688)
    })
});