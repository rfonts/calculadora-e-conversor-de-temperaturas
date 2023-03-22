var numero1 = document.getElementById('#numero1');
var numero2 = document.getElementById('#numero2');
var input1 = document.getElementsByTagName('input');
var input2 = document.getElementsByTagName('input');
var resultado = document.querySelector('span');

function somar() {
    resultado.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

function subtrair() {
    resultado.innerHTML = parseInt(input1.value) - parseInt(input2.value);
}

function multiplicar() {
    resultado.innerHTML = parseInt(input1.value) * parseInt(input2.value);
}

function dividir() {
    resultado.innerHTML = parseInt(input1.value) / parseInt(input2.value);
}

function clean() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById('tela-resultado').innerHTML = "";
}

input1 = document.getElementById('numero1');

input1.addEventListener('input', () => {
    numero1 = parseInt(input1.value, 10);
    if (numero1 < 0 || numero1 > 100) {
        alert("Apenas números de 0 a 100!");
        input1.value = '';
    }
});

input2 = document.getElementById('numero2')

input2.addEventListener('input', () => {
    numero2 = parseInt(input2.value, 10);
    if (numero2 < 0 || numero2 > 100) {
        alert("Apenas números de 0 a 100!");
        input2.value = '';
    }
});
