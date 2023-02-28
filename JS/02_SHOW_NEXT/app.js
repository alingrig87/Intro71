var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function showNextNumber() {
	var firstNumber = firstNumberInput.value;
	output.textContent = Number(firstNumber) + 1;
	console.log(Number(firstNumber) + 1);

	// if (isNaN(firstNumber) == true) {
	// 	output.textContent = 'Va rugam introduceti un numar!';
	// }

	if (firstNumber < 0) {
		output.style.color = 'red';
	} else {
		output.style.color = 'green';
	}
}
