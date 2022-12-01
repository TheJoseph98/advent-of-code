function calorieHunting(elfInventoryData) {
	let elvesTotalCalories = [];

	// parse the input into an easily accessible array
	let foodInventory = elfInventoryData.split(/\r?\n/);

	let currentElfCalories = 0;

	for (let i = 0; i < foodInventory.length; i++) {
		// if the line is empty or it's the last element in array, take the current elf's calorie sum and push it to the total calories array
		if (foodInventory[i] === "" || i === foodInventory.length - 1) {
			elvesTotalCalories.push(currentElfCalories);
			currentElfCalories = 0;
		}
		else {
			currentElfCalories += parseInt(foodInventory[i]);
		}
	}

	// sort the array in descending order
	elvesTotalCalories.sort((a, b) => b - a);

	console.log(elvesTotalCalories);
	// PART 1: get the calorie amount of the elf carrying the most calories
	console.log(elvesTotalCalories[0]);

	// PART 2: get the total calorie amount of the top 3 elves carrying the most calories
	let topThreeElvesTotal = elvesTotalCalories.reduce((accumulator, currentValue, index) => {
		if (index >= 3) {
			return accumulator + 0;
		}
		return accumulator + currentValue;
	}, 0);
	console.log(topThreeElvesTotal);
}
