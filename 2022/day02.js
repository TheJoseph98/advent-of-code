function rockPaperScissors_02() {
	try {
		const handScores = {
			"A": 1,
			"B": 2,
			"C": 3
		};
		
		const rounds = fileReader.data.split(/\r?\n/);

		part1_02(rounds, handScores);
		part2_02(rounds, handScores);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function part1_02(rounds, handScores) {
	let totalScore = 0;
	for (let round of rounds) {
		// skip empty lines
		if (round === "") {
			continue;
		}
		let moves = round.split(" ");

		let opponentMove = moves[0];
		let playerMove = convertMove_02(moves[1]);

		let handScore = handScores[playerMove];
		let outcomeScore = getOutcomeScore_02(opponentMove, playerMove);

		totalScore += handScore + outcomeScore;
	}
	printResult(`Part 1: ${totalScore}`);
}

function part2_02(rounds, handScores) {
	let totalScore = 0;
	for (let round of rounds) {
		// skip empty lines
		if (round === "") {
			continue;
		}
		let moves = round.split(" ");

		let opponentMove = moves[0];
		let playerMove = getPlayerMove_02(moves[1], opponentMove);

		let handScore = handScores[playerMove];
		let outcomeScore = getOutcomeScore_02(opponentMove, playerMove);

		totalScore += handScore + outcomeScore;
	}
	printResult(`Part 2: ${totalScore}`);
}

// converts the player's move to the same set as opponent's moves for easier logic
function convertMove_02(move) {
	const playerMoves = {
		"X": "A",
		"Y": "B",
		"Z": "C"
	};
	return playerMoves[move];
}

// get the player's move for part 2
function getPlayerMove_02(winCondition, opponentMove) {
	// X - lose, Y - draw, Z - win
	const playerMovesTable = {
		"X": {
			"A": "C",
			"B": "A",
			"C": "B"
		},
		"Y": {
			"A": "A",
			"B": "B",
			"C": "C"
		},
		"Z": {
			"A": "B",
			"B": "C",
			"C": "A"
		}
	};
	return playerMovesTable[winCondition][opponentMove];
}

function getOutcomeScore_02(opponentMove, playerMove) {
	const winningMoves = {
		"A": "C",
		"B": "A",
		"C": "B"
	};

	if (playerMove === opponentMove) {
		return 3;
	}
	else if (winningMoves[playerMove] === opponentMove) {
		return 6;
	}
	else {
		return 0;
	}
}