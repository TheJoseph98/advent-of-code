function rucksackReorganization_03() {
	try {
		let rucksacks = fileReader.data.split(/\r?\n/);
		
		part1_03(rucksacks);
		part2_03(rucksacks);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function part1_03(rucksacks) {
	let prioritySum = 0;

	for (const sack of rucksacks) {
		// ignore empty lines
		if (sack === "") continue;

		let item1 = new Set(sack.slice(0, sack.length / 2));
		let item2 = new Set(sack.slice(sack.length / 2));

		let commonType = findCommonType_03(item1, item2);

		prioritySum += calculatePriority_03(commonType);
	}

	printResult(`Part 1: ${prioritySum}`);
}

function part2_03(rucksacks) {
	let prioritySum = 0;

	for (let i = 0; i < rucksacks.length; i+=3) {
		// ignore empty lines
		if (rucksacks[i] === "") continue;

		let commonBadge = findCommonBadge_03(rucksacks.slice(i, i + 3));

		prioritySum += calculatePriority_03(commonBadge);
	}

	printResult(`Part 2: ${prioritySum}`);
}

function findCommonType_03(item1, item2) {
	for (let character of item1) {
		if (item2.has(character)) {
			return character;
		}
	}
	return null;
}

function findCommonBadge_03(group) {
	const sack1 = new Set(group[0]);
	const sack2 = new Set(group[1]);
	const sack3 = new Set(group[2]);

	for (let character of sack1) {
		if (sack2.has(character) && sack3.has(character)) {
			return character;
		}
	}

	return null;
}

function calculatePriority_03(letter) {
	const charCode = letter.charCodeAt(0);
	if (charCode >= 65 && charCode <= 90) {
		return charCode - 64 + 26;
	}
	else if (charCode <= 122) {
		return charCode - 96;
	}
	else {
		return 0;
	}
}