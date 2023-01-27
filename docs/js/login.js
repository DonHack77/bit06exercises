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
        window.open("http://127.0.0.1:5500/docs/index.html")
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Error, Verifica primero tus datos',
            text: 'Los datos que ingresaste no son correctos!',
            footer: 'Inténtalo de nuevo'
          })
    }  
}




