var cnpInput = document.getElementById('cnp');
var dayInput = document.getElementById('day');
var monthInput = document.getElementById('month');
var yearInput = document.getElementById('year');

var errorMessage = '';
var output = document.getElementById('output');

function validateCNP() {
	if (isCNPValid() && isDayValid() && isMonthValid() && isYearValid()) {
		output.textContent = 'CNP VALID';
		output.style.color = 'green';
	} else {
		output.textContent = errorMessage;
		output.style.color = 'red';
	}
}

function isCNPValid() {
	var cnp = cnpInput.value;
	var genderFromCNP = Number(cnp[0]);

	if (cnp.length != 13) {
		errorMessage = 'CNP-ul trebuie sa contina 13 cifre';
		return false;
	} else if (isNaN(Number(cnp))) {
		errorMessage = 'CNP trebuie sa contina doar cifre';
		return false;
	} else if (isNaN(genderFromCNP) || genderFromCNP < 1 || genderFromCNP > 8) {
		errorMessage = 'Prima cifra din cnp trebuie sa fie intre 1 si 8';
		return false;
	} else if (isDayMonthCombinationValid() == false) {
		errorMessage = 'Combinatie zi luna invalida';
		return false;
	}

	return true;
}

function isDayValid() {
	var day = Number(dayInput.value);
	var dayFromCNP = cnpInput.value.substring(5, 7);
	// var dayFromCNP = cnpInput.value[5] + cnpInput.value[6];

	if (isNaN(day)) {
		errorMessage = 'Ziua trebuie sa contina doar cifre';
		return false;
	} else if (day < 1 || day > 31) {
		errorMessage = 'Ziua trebuie sa fie intre 1 si 31';
		return false;
	}
	if (day != dayFromCNP) {
		errorMessage = 'Ziua introdusa nu corespunde cu cea din CNP';
		return false;
	}

	return true;
}

function isMonthValid() {
	var month = Number(monthInput.value);
	var monthFromCNP = cnpInput.value.substring(3, 5);
	// var monthFromCNP = cnpInput.value[3] + cnpInput.value[4];

	if (isNaN(month)) {
		errorMessage = 'Luna trebuie sa contina doar cifre';
		return false;
	} else if (month < 1 || month > 12) {
		errorMessage = 'Luna trebuie sa fie intre 1 si 12';
		return false;
	}
	if (month != monthFromCNP) {
		errorMessage = 'Luna introdusa nu corespunde cu cea din CNP';
		return false;
	}
	return true;
}

function isYearValid() {
	var year = Number(yearInput.value);
	var yearFromCNP = cnpInput.value.substring(1, 3);
	// var yearFromCNP = cnpInput.value[1] + cnpInput.value[2];

	if (isNaN(year)) {
		errorMessage = 'Luna trebuie sa contina doar cifre';
		return false;
	} else if (year < 1900 || year > 2023) {
		errorMessage = 'Anul trebuie sa fie intre 1900 si 2023';
		return false;
	}
	if (yearInput.value.substring(2, 4) != yearFromCNP) {
		errorMessage = 'Anul introdusa nu corespunde cu cel din CNP';
		return false;
	}

	return true;
}

function isDayMonthCombinationValid() {
	var month = Number(cnpInput.value.substring(3, 5));
	var day = Number(cnpInput.value.substring(5, 7));

	if (day == 0 || day > 31) {
		return false;
	} else if (month == 2 && day > 28) {
		return false;
	} else if (
		(month == 4 || month == 6 || month == 9 || month == 11) &&
		day > 30
	) {
		return false;
	}

	return true;
}
