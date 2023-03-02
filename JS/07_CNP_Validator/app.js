var cnpInput = document.getElementById('cnp');
var dayInput = document.getElementById('day');
var monthInput = document.getElementById('month');
var yearInput = document.getElementById('year');

var errorMessage = '';
var output = document.getElementById('output');

function validateCNP() {
	if (isCNPValid() && isDayValid() && isMonthValid() && isYearValid()) {
		console.log('CNP VALID');
	} else {
		output.textContent = errorMessage;
		output.style.color = 'red';
	}
}

function isCNPValid() {
	var cnp = cnpInput.value;

	if (cnp.length != 13) {
		errorMessage = 'CNP-ul trebuie sa contina 13 cifre';
		return false;
	}
	// CNP should be a number - CNP trebuie sa contina doar cifre
	// isNaN(Number(cnp))
	// verify if first char is between 1 and 8
	// Prima cifra din cnp trebuie sa fie intre 1 si 8
}

function isDayValid() {}

function isMonthValid() {}

function isYearValid() {}
