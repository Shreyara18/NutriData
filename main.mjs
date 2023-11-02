import jsonData from './food.json' assert { type: 'json' };

const foodItems = jsonData.map((item) => item.foodname);
console.log("\n Food Items:");
console.log(foodItems);

const vegetableItems = jsonData.filter(item => item.category === 'Vegetable').map(item => item.foodname);
console.log("\nVegetable Food Items:");
console.log(vegetableItems);

const fruitItems = jsonData.filter(item => item.category === 'Fruit').map(item => item.foodname);
console.log("\nFruit Food Items:");
console.log(fruitItems);

const proteinItems = jsonData.filter(item => item.category === 'Protein').map(item => item.foodname);
console.log("\nProtein Food Items:");
console.log(proteinItems);

const nutsItems = jsonData.filter(item => item.category === 'Nuts').map(item => item.foodname);
console.log("\n Nuts Food Items:");
console.log(nutsItems);

const grainItems = jsonData.filter(item => item.calorie === 'Grain').map(item => item.foodname);
console.log("\n Grain Food Items:");
console.log(grainItems);

const dairyItems = jsonData.filter(item => item.category === 'Dairy').map(item => item.foodname);
console.log("\n Dairy Food Items:");
console.log(dairyItems);

const highCalorieFoods = jsonData.filter(item => item.calorie > 100).map(item => item.foodname);
console.log("Food Items with Calorie above 100:");
console.log(highCalorieFoods);

const lowCalorieFoods = jsonData.filter(item => item.calorie < 100).map(item => item.foodname);
console.log("\nFood Items with Calorie below 100:");
console.log(lowCalorieFoods);

const sortedByProtein = jsonData.slice().sort((a, b) => b.protiens - a.protiens);
console.log("Food Items sorted by Protein Content (highest to lowest):");
console.log(sortedByProtein);

const sortedByCarb = jsonData.slice().sort((a, b) => a.carb - b.carb);
console.log("\nFood Items sorted by Carb Content (lowest to highest):");
console.log(sortedByCarb);


