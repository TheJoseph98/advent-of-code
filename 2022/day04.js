function campCleanup_04() {
	try {
		let camps = fileReader.data.split(/\r?\n/);
		
		part1_04(camps);
		part2_04(camps);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function part1_04(camps) {
	let totalOverlaps = 0;
	for (let camp of camps) {
		// skip empty lines
		if (camp === "") continue;

		let sections = camp.split(",");
		let leftSection = sections[0].split("-").map(e => parseInt(e)); // convert to integers
		let rightSection = sections[1].split("-").map(e => parseInt(e)); // convert to integers

		if (checkOverlap_04(leftSection, rightSection)) {
			totalOverlaps++;
		}
	}

	printResult(`Part 1: ${totalOverlaps}`);
}

function part2_04(camps) {
	let totalIntersections = 0;
	for (let camp of camps) {
		// skip empty lines
		if (camp === "") continue;

		let sections = camp.split(",");
		let leftSection = sections[0].split("-").map(e => parseInt(e)); // convert to integers
		let rightSection = sections[1].split("-").map(e => parseInt(e)); // convert to integers

		if (checkIntersection_04(leftSection, rightSection)) {
			totalIntersections++;
		}
	}

	printResult(`Part 2: ${totalIntersections}`);
}

function checkIntersection_04(leftSection, rightSection) {
	return (leftSection[1] >= rightSection[0] && leftSection[0] <= rightSection[0])
		|| (rightSection[1] >= leftSection[0] && rightSection[0] <= leftSection[0])
		|| checkOverlap_04(leftSection, rightSection);
}

function checkOverlap_04(leftSection, rightSection) {
	return (leftSection[0] >= rightSection[0] && leftSection[1] <= rightSection[1])
		|| (rightSection[0] >= leftSection[0] && rightSection[1] <= leftSection[1]);
}