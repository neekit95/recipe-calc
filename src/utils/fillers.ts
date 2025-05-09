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
	},

	snickers: {
		biscuit: {
			base: {
				eggs: 170,
				sugar: 195,
			},
			liquidIngredients: {
				oil: 48,
				milk: 130,
			},
			dryIngredients: {
				flour: 190,
				cacao: 38,
				bakingPowder: 6,
				salt: 3,
				bakingSoda: 3
			},
		},
		assemblyCream: {
			creamCheese: 352,
			cream: 112,
			powderedSugar: 96,
			peanutButter: 64

		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 78,
				cream: 54,
			},
			step2: {
				saltedCaramel: 120,
				salt: 1.5,
			},
			step3: {
				peanut: 60,
			},
		},
		impregnation: {
			milk: 100
		}
	},

	strawberryVanilla: {
		biscuit: {
			base: {
				eggs: 180,
				sugar: 180,
			},
			liquidIngredients: {
				oil: 50,
				milk: 130,
			},
			dryIngredients: {
				flour: 200,
				vanillaSugar: 10,
				bakingPowder: 6,
				salt: 3,
			},
		},
		assemblyCream: {
			creamCheese: 310,
			cream: 100,
			powderedSugar: 85,
			strawberryJam: 60

		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 40,
				water: 20,
			},
			step2: {
				starch: 20
			},
			step3: {
				strawberry: 240,
			},
		},
		impregnation: {
			milk: 100
		}
	},

	cherryChocolate: {
		biscuit: {
			base: {
				eggs: 170,
				sugar: 195,
			},
			liquidIngredients: {
				oil: 48,
				milk: 130,
			},
			dryIngredients: {
				flour: 190,
				bakingPowder: 6,
				bakingSoda: 3,
				salt: 3,
				cacao: 38
			},
		},
		assemblyCream: {
			creamCheese: 320,
			cream: 96,
			powderedSugar: 80,
			blackChocolate: 140,
		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 35,
				water: 15,
			},
			step2: {
				starch: 15
			},
			step3: {
				cherry: 200,
			},
		},
		impregnation: {
			milk: 120
		}
	},

	redVelvetCherry: {
		biscuit: {
			base: {
				eggs: 126,
				sugar: 189,
			},
			liquidIngredients: {
				oil: 84,
				kefir: 168,
			},
			dryIngredients: {
				flour: 224,
				bakingPowder: 5.6,
				bakingSoda: 1.4,
				cacao: 10.5,
			},
		},
		assemblyCream: {
			creamCheese: 400,
			cream: 120,
			powderedSugar: 104,
		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 35,
				water: 15,
			},
			step2: {
				starch: 15
			},
			step3: {
				cherry: 200,
			},
		},
	},

	redVelvetStrawberry: {
		biscuit: {
			base: {
				eggs: 126,
				sugar: 189,
			},
			liquidIngredients: {
				oil: 84,
				kefir: 168,
			},
			dryIngredients: {
				flour: 224,
				bakingPowder: 5.6,
				bakingSoda: 1.4,
				cacao: 10.5,
			},
		},
		assemblyCream: {
			creamCheese: 400,
			cream: 120,
			powderedSugar: 104,
		},
		smoothingCream: {
			butter: 100,
			powderedSugar: 100,
			creamCheese: 300,
		},
		filling: {
			step1: {
				sugar: 38,
				water: 18,
			},
			step2: {
				starch: 18
			},
			step3: {
				strawberry: 225,
			},
		},

	},
};
