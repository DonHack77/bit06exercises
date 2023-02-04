"use strict";
// 1) Pedir nombre al usuario y saludarlo
const $formName = document.getElementById("formName");
const $greet = document.getElementById("greet");

$formName.addEventListener("submit", (e) => {
  e.preventDefault();
  const $firsName = $formName.name.value;
  const $secondName = $formName.surname.value;
  $greet.textContent += `¡Saludos! ${$firsName} ${$secondName} ¡Bienvenido!`;
});

// 2) Pedir edad al usuario y responder si es o no es mayor de edad
const $formAge = document.getElementById("formAge");
const $infoAge = document.getElementById("infoAge");
$formAge.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = Number($formAge.age.value);
    if (age >= 18) {
        $infoAge.textContent += `-Eres mayor de edad !!, por que tienes: ${age} años`
    } else {
        $infoAge.textContent += `-Eres menor de edad !!, por que tienes: ${age} años`
    }
});
/* 3) Pedir nombre y edad al usuario,
si se llama pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera. 4 */
const $formNameage = document.getElementById("formNameage");
const $asigSala = document.getElementById("asigSala");

$formNameage.addEventListener("submit", (e) => {
    e.preventDefault();
    const age = Number($formNameage.age1.value);
    const name = $formNameage.name1.value;
    if (name === "pepita" && age >= 18) {
        $asigSala.textContent += `-${name}, Ingreso permitido a sala de espera 1`
    }else if (name === "pepita" && age < 18) {
        $asigSala.textContent += `-${name}, Ingreso permitido a sala de espera 2`
    }else if (name !== "pepita" && age >= 18) {
        $asigSala.textContent += `-${name}, Ingreso permitido a sala de espera 3`
    }else{
        $asigSala.textContent += `-${name}, Ingreso permitido a sala de espera 4`
    }
});

// 4) Pedir un número y mostrar los números pares desde 1 hasta n
const $numberShow = document.getElementById("numberShow");
const $numberPares = document.getElementById("numberPares");

$numberShow.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number = Number($numberShow.number.value);
    let pares = 1
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
        pares += `,${i}`;   
        };
    } $numberPares.textContent += `Los numeros pares de ${number} incluyendo el uno son ${pares}`
});

// 5) Pedir un número, mostrar el doble de n
const $dobleNumber = document.getElementById("dobleNumber");
const $numberDoble = document.getElementById("numberDoble");
$dobleNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number = Number($dobleNumber.num.value);
    $numberDoble.textContent = `El doble de ${number} es: ${number * 2}`
});


// 6) Pedir un número, mostrar el triple de n
const $tripleNumber = document.getElementById("tripleNumber");
const $numberTriple = document.getElementById("numberTriple");
$tripleNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number1 = Number($tripleNumber.num1.value);
    $numberTriple.textContent = `El triple de ${number1} es: ${number1 * 3}`
});

// 7) Pedir un número, mostrar la mitad de n
const $mitadNumber = document.getElementById("mitadNumber");
const $numberMitad = document.getElementById("numberMitad");
$mitadNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number2 = Number($mitadNumber.num2.value);
    $numberMitad.textContent = `La mitad de ${number2} es: ${number2 /2}`
});
// 8) Pedir un número, mostrar la tercera parte de n
const $terceraNumber = document.getElementById("terceraNumber");
const $numberTercera = document.getElementById("numberTercera");
$terceraNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number3 = Number($terceraNumber.num3.value);
    $numberTercera.textContent = `La mitad de ${number3} es: ${number3 /3}`
});
// 9) Pedir un número, mostrar el cuadrado de n
const $cuadradoNumber = document.getElementById("cuadradoNumber");
const $numberCuadrado = document.getElementById("numberCuadrado");
$cuadradoNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number3 = Number($cuadradoNumber.num4.value);
    $numberCuadrado.textContent = `El numero al cuadrado de ${number3} es: ${number3 ** 2}`
});
// 10) Pedir un número, mostrar n reducido en 5
const $menoscincoNumber = document.getElementById("menoscincoNumber");
const $numberMenos = document.getElementById("numberMenos");
$menoscincoNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number4= Number($menoscincoNumber.num5.value);
    $numberMenos.textContent = `La mitad de ${number4} es: ${number4 - 5}`
});
// 11) Pedir un número, mostrar el doble de n más 4
const $mascuatroNumber = document.getElementById("mascuatroNumber");
const $numberMascuatro = document.getElementById("numberMascuatro");
$mascuatroNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number6 = Number($mascuatroNumber.num6.value);
    $numberMascuatro.textContent = `El doble de ${number6} mas cuatro es: ${number6 * 2 + 4}`
});
// 12) Pedir un número, mostrar si es positivo, negativo o si es cero
const $tipoNumber = document.getElementById("tipoNumber");
const $numberTipo = document.getElementById("numberTipo");
$tipoNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number7 = Number($tipoNumber.num7.value);
    if (number7 === 0) {
    $numberTipo.textContent = `El numero ingresado es ${number7}`    
    } else if (number7 > -1) {
    $numberTipo.textContent = `El numero ${number7} es positivo`
    }else {
    $numberTipo.textContent = `El numero ${number7} es negativo `
    }
});

// 13) Pedir un número, mostrar si es par, impar o si es cero
const $tipNumber = document.getElementById("tipNumber");
const $numberTip = document.getElementById("numberTip");
$tipNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number8 = Number($tipNumber.num8.value);
    if (number8 === 0) {
    $numberTip.textContent = `El numero ingresado es ${number8}`    
    }else if (number8 < 0) {
    $numberTip.textContent = `El numero ${number8} es negativo `
    }else if (number8 % 2 === 0) {
    $numberTip.textContent = `El numero ${number8} es par`
    }else if (number8 % 2 === 1) {
    $numberTip.textContent = `El numero ${number8} es impar`
    }else {
    $numberTip.textContent = `No ingresaste un numero `
    }
});

// 14) Pedir un número, mostrar si es un número primo o no
const $primoNumber = document.getElementById("primoNumber");
const $numberPrimo = document.getElementById("numberPrimo");
$primoNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number9 = Number($primoNumber.num9.value);
    let contador = 0;
    for (let i = 1; i <= number9; i++) {
        if (number9 % i === 0) {
        contador++;
    }
  }
    if (contador === 2) {
    $numberPrimo.textContent = `El numero ${number9} es primo`
    } else {
    $numberPrimo.textContent = `El numero ${number9} no es primo`
    }
});

// 15) Pedir dos números, mostrar si el primer número es divisible por el segundo
const $divisibleNumber = document.getElementById("divisibleNumber");
const $numberDivisible = document.getElementById("numberDivisible");
$divisibleNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const number10 = Number($divisibleNumber.num10.value);
    const number11 = Number($divisibleNumber.num11.value);
    
    if (number10 % number11 === 0) {
    $numberDivisible.textContent = `El numero ${number10} es divisible por ${number11}`
    } else {
    $numberDivisible.textContent = `El numero ${number10} no es divisible por ${number11}`
    } 
});
// 16) Pedir dos números y el nombre de una operación, mostrar el resultado
const unaOperacion = () => {
    const $operacionNumber = document.getElementById("operacionNumber")
    const $numberOperacion = document.getElementById("numberOperacion")
    $operacionNumber.addEventListener("submit", (e) =>{
        e.preventDefault();
    const operacion = $operacionNumber.opera.value;
    const number12 = Number($operacionNumber.num12.value);
    const number13 = Number($operacionNumber.num13.value);
  
    switch (operacion) {
      case "sumar":
        $numberOperacion.textContent =`${number12} + ${number13} es igual a = ${number12 + number13}`;
        break;
      case "restar":
        $numberOperacion.textContent =`${number12} - ${number13} es igual a = ${number12 - number13}`;
        break;
      case "dividir":
        $numberOperacion.textContent =`${number12} / ${number13} es igual a = ${number12 / number13}`;
        break;
      case "multiplicar":
        $numberOperacion.textContent =`${number12} x ${number13} es igual a = ${number12 * number13}`;
        break;
  
      default:
        $numberOperacion.textContent =`Esta operacion ${operacion} no esta disponible en esta funcion`;
        break;
    }
    })};
unaOperacion();

// 17) Pedir un número, mostrar la suma total desde 1 hasta n
const $sumaNumber = document.getElementById("sumaNumber");
const $numberSuma = document.getElementById("numberSuma");
$sumaNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numb= Number($sumaNumber.sum1.value);
    let resultado = 0
    for (let i = 1; i <= numb ; i++) {
    resultado += i;
    }
    $numberSuma.textContent = `La suma total de ${numb} es: ${resultado}`
});

// 18) Pedir un número, mostrar la suma de los números pares desde 1 hasta n
const $sumaPares = document.getElementById("sumaPares");
const $paresSuma = document.getElementById("paresSuma");
$sumaPares.addEventListener("submit", (e) =>{
    e.preventDefault();
    const par = Number($sumaPares.sum2.value);
    let resultado = 0
    for (let i = 1; i <= par ; i++) {
        if (i % 2 === 0) {
            resultado += i;
        }
    }
    $paresSuma.textContent = `La suma total de los numeros pares de ${par} es: ${resultado}`
});
// 19) Pedir un número, mostrar la suma de los números impares desde 1 hasta n
const $sumaImpares = document.getElementById("sumaImpares");
const $imparesSuma = document.getElementById("imparesSuma");
$sumaImpares.addEventListener("submit", (e) =>{
    e.preventDefault();
    const impar = Number($sumaImpares.sum3.value);
    let resultado = 0
    for (let i = 1; i <= impar ; i++) {
        if (i % 2 !== 0) {
            resultado += i;
        }
    }
    $imparesSuma.textContent = `La suma total de los numeros impares de ${impar} es: ${resultado}`
});
// 20) Pedir un número, mostrar multiplos de 3 desde 1 hasta n
const $multiNumber = document.getElementById("multiNumber");
const $numberMulti = document.getElementById("numberMulti");
$multiNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const mult = Number($multiNumber.mult.value);
    let result = 1
    for (let ite = 1; ite <= mult ; ite++) {
        if (ite % 3 === 0) {
            result += `-${ite}`;
        }
    }
    $numberMulti.textContent = `Los mutiplos de 3 del numero ${mult} desde el uno son: ${result}`
});
// 21) Pedir un número, mostrar los números desde n hasta 0
const $ceroNumber = document.getElementById("ceroNumber");
const $numberCero = document.getElementById("numberCero");
$ceroNumber.addEventListener("submit", (e) =>{
    e.preventDefault();
    const most = Number($ceroNumber.most.value);
    let result =[]
    for (let ite = most; ite > -1 ; ite--) {
        result += ` [${ite}] `;
    }
    $numberCero.textContent = `Los numeros desde ${most} hasta 0 son: ${result}`
});





// 14) Pedir un número, mostrar si es un número primo o no

// 15) Pedir dos números, mostrar la suma

// 16) Pedir dos números, mostrar la resta.

// 17) Pedir dos números, mostrar la multiplicación.

// 18) Pedir dos números, mostrar la división.

// 19) Pedir dos números, mostrar el resto de la división.