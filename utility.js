const fileReader = {
	data: null,
	name: null,
	type: null,
	size: null
};

function initialize() {
	const fileInput = document.getElementById("input-file");
	fileInput.addEventListener("change", readFile);
}

function readFile() {
	try {
		let file = this.files[0];
		const reader = new FileReader();

		reader.addEventListener("load", () => {
			fileReader.data = reader.result;
			fileReader.name = file.name;
			fileReader.type = file.type;
			fileReader.size = file.size;
		});

		reader.readAsText(file);
	}
	catch (e) {
		printError(`${e.name}: ${e.message}`);
	}
}

function clearResult() {
	document.getElementById("result-container").replaceChildren();
}

function printResult(inputString) {
	let resultContainer = document.getElementById("result-container");
	let result = document.createElement("p");
	result.innerText = inputString;
	resultContainer.append(result);
}

function clearError() {
	document.getElementById("error-container").replaceChildren();
}

function printError(inputString) {
	let errorContainer = document.getElementById("error-container");
	let error = document.createElement("p");
	error.innerText = inputString;
	errorContainer.append(error);
}