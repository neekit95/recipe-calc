export const fillers = {
  bananaCaramel: {
    biscuit: {
      base: {
        eggs: 180,
        sugar: 150,
      },
      liquidIngredients: {
        bananaPuree: 120,
        milk: 55,
        oil: 70,
        sourCream: 45,
      },
      dryIngredients: {
        flour: 170,
        starch: 30,
        bakingSoda: 5,
        bakingPowder: 5,
      },
    },
    assemblyCream: {
      creamCheese: 300,
      cream: 80,
      powderedSugar: 40,
      boiledCondensedMilk: 100,
    },
    smoothingCream: {
      butter: 100,
      powderedSugar: 100,
      creamCheese: 300,
    },
    filling: {
      step1: {
        sugar: 50,
        water: 15,
      },
      step2: {
        butter: 50,
      },
      step3: {
        bananas: 230,
      },
    },
  },

	appleCaramel: {
		biscuit: {
			base: {
				eggs: 180,
				sugar: 230,
			},
			liquidIngredients: {
				applePuree: 50,
				milk: 80,
			},
			dryIngredients: {
              flour: 240,
              whiteChocolate: 80,
              bakingPowder: 10,
              apple: 80,
            },
		},
		assemblyCream: {
			creamCheese: 400,
			cream: 120,
			powderedSugar: 100,
            cinnamon: 2,
		},
		smoothingCream: {
			butter: 120,
			powderedSugar: 120,
			creamCheese: 360,
		},
		filling: {
			step1: {
				sugar: 50,
				water: 15,
			},
			step2: {
				butter: 50,
			},
			step3: {
				apple: 230,
			},
		},
		impregnation: {
			applePuree: 20,
			water: 80,
			powderedSugar: 20,
		}
	},

  carrot: {
    biscuit: {
      base: {
        // нужно пофиксить начальное значение в инпуте
        eggs: 240,
        sugar: 260,
      },
      liquidIngredients: {
        oil: 100,
      },
      dryIngredients: {
        flour: 250,
        salt: 5,
        bakingPowder: 24,
        bakingSoda: 5,
        carrot: 400,
        orangePeel: 10
      },
    },
    assemblyCream: {
      creamCheese: 450,
      cream: 135,
      powderedSugar: 115,

    },
    smoothingCream: {
      butter: 150,
      powderedSugar: 150,
      creamCheese: 450,
    },
    filling: {
      step1: {
        sugar: 100,
        water: 25,
      },
      step2: {
        cream: 70,
        orangeJuice: 30,
        orangePeel: 10,
      },
      step3: {
        butter: 35,
      },
    },
  },
	citrus: {
		biscuit: {
			base: {
				eggs: 180,
				sugar: 180,
			},
			liquidIngredients: {
				oil: 130,
				milk: 50,
			},
			dryIngredients: {
				flour: 200,
				vanillaSugar: 3,
				bakingPowder: 6,
				salt: 3,
			},
		},
		assemblyCream: {
			creamCheese: 400,
			cream: 120,
			powderedSugar: 105,

		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 75,
				eggs: 60,
			},
			step2: {
				lemonJuice: 54
			},
			step3: {
				butter: 54,
			},
		},
	}
};
