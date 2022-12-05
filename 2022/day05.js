function supplyStacks_05() {
	try {
		let inputData = fileReader.data.split(/\r?\n/)
		let firstEmptyLine = inputData.findIndex(line => line === "");

		let stacksData = inputData.slice(0, firstEmptyLine - 1);
		let moveInstructions = inputData.slice(firstEmptyLine + 1);

		// make 2 copies of stacks for parts 1 and 2
		let stacksPart1 = parseStacks_05(stacksData);
		let stacksPart2 = parseStacks_05(stacksData);

		part1_05(stacksPart1, moveInstructions);
		part2_05(stacksPart2, moveInstructions);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function part1_05(stacks, moveInstructions) {
	for (let instruction of moveInstructions) {
		const moves = instruction.split(" ");
		let numberOfElements = parseInt(moves[1]);
		let startStack = moves[3];
		let targetStack = moves[5];

		let removedElements = stacks[startStack].splice(-numberOfElements).reverse();
		stacks[targetStack] = stacks[targetStack].concat(removedElements);
	}

	let topStack = "";
	for (let stack of Object.values(stacks)) {
		topStack += stack.pop();
	}

	printResult(`Part 1: ${topStack}`);
}

function part2_05(stacks, moveInstructions) {
	for (let instruction of moveInstructions) {
		const moves = instruction.split(" ");
		let numberOfElements = parseInt(moves[1]);
		let startStack = moves[3];
		let targetStack = moves[5];

		let removedElements = stacks[startStack].splice(-numberOfElements);
		stacks[targetStack] = stacks[targetStack].concat(removedElements);
	}

	let topStack = "";
	for (let stack of Object.values(stacks)) {
		topStack += stack.pop();
	}

	printResult(`Part 2: ${topStack}`);
}

function parseStacks_05(stacksData) {
	let tmpStacksData = [];
	// remove all spaces and brackets
	for (let row = 0; row < stacksData.length; row++) {
		let newRow = [];
		for (let column = 1; column < stacksData[row].length; column += 4) {
			newRow.push(stacksData[row][column])
		}
		tmpStacksData.push(newRow);
	}

	let stacks = {};

	// fill the stacks
	for (let column = 0; column < tmpStacksData[0].length; column++) {
		let newColumn = [];
		for (let row = tmpStacksData.length - 1; row >= 0 ; row--) {
			newColumn.push(tmpStacksData[row][column]);
		}
		newColumn = newColumn.filter(item => item !== " ");
		stacks[column + 1] = newColumn;
	}

	return stacks;
}