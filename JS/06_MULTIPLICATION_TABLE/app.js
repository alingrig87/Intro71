var numberInput = document.getElementById('number');
var output = document.getElementById('output');

function showMultiplicationTable() {
	var number = Number(numberInput.value);
	output.textContent = '';

	var i = 1;
	while (i <= 10) {
		var tmpOutput = number + ' x ' + i + ' = ' + number * i + '<br>';
		output.innerHTML = output.innerHTML + tmpOutput;
		i++;
	}
}

// 5 x 1 = 5
// 5 x 2 = 10
//
