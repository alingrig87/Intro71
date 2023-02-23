var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function showNumber() {
	var firstNumber = firstNumberInput.value;
	output.textContent = firstNumber;
	if (firstNumber < 0) {
		output.style.color = 'red';
	} else {
		output.style.color = 'green';
	}
}
