'use strict'

const $sum = document.getElementById('sum');
const $form1 = document.getElementById('form1');

$form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseInt($form1.num1.value);
    const num2 = parseInt($form1.num2.value);

    $sum.textContent = num1 + num2;

});

const $res = document.getElementById('res');
const $form2 = document.getElementById('form2');

$form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const num3 = parseInt($form2.num3.value);
    const num4 = parseInt($form2.num4.value);

    $res.textContent = num3 - num4;

});

