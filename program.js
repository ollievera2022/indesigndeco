


if(localStorage.getItem('Confirmacion') !== 'Correcto'){
    
    alert('Bienvenido! Primero debes registrarte')
    let name = prompt('Como es tu nombre y apellido?') 
    let phone = prompt('Un telefono de contacto?') 
    let email = prompt('Tu direccion de email?') 
    let address = prompt('Una direccion?') 
    alert('Muchas gracias') 
    
    let username = $('#nameUser')
    
    $(document).ready(function(){
        welcome()
    });
    
    function welcome(){
    
        localStorage.setItem('nombre', name)
        localStorage.setItem('nombre', name)
        localStorage.setItem('telefono', phone)
        localStorage.setItem('email', email)
        localStorage.setItem('direccion', address)
        
        currentName = localStorage.getItem('nombre')
    
        username.html(currentName)
        
        localStorage.setItem('Confirmacion' , 'Correcto')
    }

}


if(localStorage.getItem('Confirmacion') == 'Correcto'){
    
    let username = document.getElementById('nameUser')
    
    $(document).ready(function(){
        load()
    });
    
    
    
    function load(){
            
        let currentName = localStorage.getItem('nombre')
    
        if( currentName != 'null'){
        username.innerHTML = currentName
        }   else{
        username.innerHTML = "Usuario"
        }
    }

}
let valueProductUno = $('.valueProductUno')
    
    valueProductUno.click(function(){

        sessionStorage.setItem('Seccion:', 'Sillones')
})

let valueProductDos = $(".valueProductDos")

 valueProductDos.click(
     function() {

        sessionStorage.setItem('Seccion:', 'Comedor')

})

let valueProductTres = $(".valueProductTres")

 valueProductTres.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Dormitorio')

})

let valueProductCuatro = $(".valueProductCuatro")

 valueProductCuatro.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Decoracion')

})

 let valueProductCinco = $(".valueProductCinco")

 valueProductCinco.click(
     function() {
        sessionStorage.setItem('Seccion:', 'Chandelier')
        sessionStorage.setItem('Id-Product', '0')
})

let serviciosUno = $('#serviciosUno')
    
    serviciosUno.click(function(){

        alert('Para comunicarse con nuestro equipo de Decoradores,         comuniquese al 098 779 570')
})

let serviciosDos = $('#serviciosDos')
    
    serviciosDos.click(function(){

    alert('Para comunicarse con nuestro taller de construccion,         comuniquese al 098 779 571')
})

let serviciosTres = $('#serviciosTres')
    
    serviciosTres.click(function(){

    alert('Para comunicarse con nuestro equipo de Consultores,         comuniquese al 098 779 572')
})


let suscripcion = $("#suscripcion")

suscripcion.click(
    function(){
        alert('Muchas gracias! Todas nuestras noticias te llegaran a: ' + localStorage.getItem('email'))
});


