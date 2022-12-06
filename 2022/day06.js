function tuningTrouble_06() {
	try {
		let streamBuffer = fileReader.data;
		
		let packetMarker = processMarker_06(streamBuffer, 4);
		let messageMarker = processMarker_06(streamBuffer, 14);

		printResult(`Part 1: ${packetMarker}`);
		printResult(`Part 2: ${messageMarker}`);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function processMarker_06(streamBuffer, n) {
	let marker = streamBuffer.length;
	for (let i = 0; i < streamBuffer.length - (n - 1); i++) {
		let characters = new Set(streamBuffer.slice(i, i+n));
		if (characters.size === n) {
			marker = i + n;
			break;
		}
	}
	return marker;
}