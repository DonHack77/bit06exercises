'use strict'

function login(){
    let user, password

    user = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(user == "bit" && password == "2023"){
        Swal.fire(
            '!Perfecto!',
            'Ahora presiona OK',
            'success');
        window.open("https://donhack77.github.io/bit06exercises/ejercicios.html")
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Error, Verifica primero tus datos',
            text: 'Los datos que ingresaste no son correctos!',
            footer: 'Inténtalo de nuevo'
          })
    }  
}




