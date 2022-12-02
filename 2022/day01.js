function calorieCounting_01(elfInventoryData) {
	try {
		let elvesTotalCalories = [];

		// parse the input into an easily accessible array
		let foodInventory = fileReader.data.split(/\r?\n/);

		let currentElfCalories = 0;

		// get total calorie amounts per elf
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

		// PART 1: get the calorie amount of the elf carrying the most calories
		part1_01(elvesTotalCalories);

		// PART 2: get the total calorie amount of the top 3 elves carrying the most calories
		part2_01(elvesTotalCalories)
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function part1_01(elvesTotalCalories) {
	printResult(`Part 1: ${elvesTotalCalories[0]}`);
}

function part2_01(elvesTotalCalories) {
	let topThreeElvesTotal = elvesTotalCalories.slice(0, 3).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	printResult(`Part 2: ${topThreeElvesTotal}`);
}
