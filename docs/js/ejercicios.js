'use strict'

// Primer Ejercicio

const $sum = document.getElementById('sum');
const $form1 = document.getElementById('form1');

$form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseInt($form1.num1.value);
    const num2 = parseInt($form1.num2.value);

    $sum.textContent += num1 + num2;
});
// Segundo ejercicio

const $res = document.getElementById('res');
const $form2 = document.getElementById('form2');

$form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const num3 = parseInt($form2.num3.value);
    const num4 = parseInt($form2.num4.value);

    $res.textContent += " " + num3 - num4;
});
// Tercer ejercicio
const $nombre1 = document.getElementById('nombre1');
const $form3 = document.getElementById('form3');

$form3.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom1 = ($form3.nom1.value);
    const ape1 = ($form3.ape1.value);

    $nombre1.textContent += nom1 + " " + ape1  
});
// Cuarto ejercicio



