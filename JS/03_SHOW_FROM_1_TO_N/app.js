var firstNumberInput = document.getElementById('first-number');
var output = document.getElementById('output');

function show1toN() {
	var firstNumber = firstNumberInput.value;
	var i = 1;
	output.textContent = '';

	while (i <= Number(firstNumber)) {
		output.textContent = output.textContent + ' ' + i;
		i = i + 1;
	}
}
