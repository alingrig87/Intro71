var inputGreutate = document.getElementById('greutate');
var inputInaltime = document.getElementById('inaltime');

function calculeazaIMC() {
	var inaltime = Number(inputInaltime.value);
	var greutate = Number(inputGreutate.value);

	var imc = greutate / (inaltime * inaltime);
	var output = document.getElementById('output');
	var imcOutput = document.getElementById('imc-output');

	imcOutput.textContent = 'IMC: ' + imc.toFixed(2);

	if (imc < 18.5) {
		output.textContent =
			'IMC sub 18,5 Risc pentru sănătate: ridicat Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.';
		output.style.color = 'lightblue';
		output.style.backgroundColor = 'black';
	} else if (imc >= 18.5 && imc <= 24.9) {
		output.textContent = 'IMC 18,5-24,9 Risc pentru sănătate: minim/scăzut';
		output.style.color = 'white';
		output.style.backgroundColor = 'black';
	} else if (imc >= 25 && imc <= 29.9) {
		output.textContent = 'IMC 25-29,9 Risc pentru sănătate: scăzut/moderat';
		output.style.color = 'lightyellow';
		output.style.backgroundColor = 'black';
	} else if (imc >= 30 && imc <= 34.9) {
		output.textContent =
			'IMC 30-34,9 Risc pentru sănătate: moderat/ridicat Acesta e un semn de avertisment: schimbă-ți dieta acum!';
		output.style.color = 'yellow';
		output.style.backgroundColor = 'black';
	} else {
		output.textContent =
			'IMC peste 35 Risc pentru sănătate: ridicat Greutatea iți afectează în mod radical sănătatea. Scapă de surplusul de greutate!';
		output.style.color = 'red';
	}
}
