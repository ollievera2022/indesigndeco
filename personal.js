let nombre = localStorage.getItem('nombre') 
let telefono = localStorage.getItem('telefono') 
let direccion = localStorage.getItem('direccion') 
let mail = localStorage.getItem('email') 

if(localStorage.getItem('nombre') != 'null'){
    let name = $('#nameDatos')
    let phone = $('#phoneDatos')
    let address = $('#addressDatos')
    let email = $('#emailDatos')

    name.html(nombre)
    phone.html(telefono)
    address.html(direccion)
    email.html(mail)
}

if(localStorage.getItem('Confirmacion') == 'Correcto'){
    
    let username = $('#nameUser')
    
    $(document).ready(function(){
        load()
    });
    
    function welcome(){
            
        let currentName = localStorage.getItem('nombre')
    
        if( currentName != 'null'){
        username.html(currentName)
        }   else{
        username.html("Usuario")
        }
    }

}

let valueProductUno = $("#valueProductUno")

 valueProductUno.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Sillones')

})

let valueProductDos = $("#valueProductDos")

 valueProductDos.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Living')

})

let valueProductTres = $("#valueProductTres")

 valueProductTres.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Dormitorio')

})

let valueProductCuatro = $("#valueProductCuatro")

 valueProductCuatro.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Decoracion')

})