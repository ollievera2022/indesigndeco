let comedor=  [
    { 
    id: 0 ,
    nombre: 'Juego de comedor Velvet',
    src:'./Media/Productos/living/1.jpg',
    precio: 7990,
    detalle: 'El juego de comedor Velvet es de estilo moderno, siendo su mesa de madera lustrada y tratada para no estropearse con el calor y los liquidos que puedan derramarse en ella. Las 6 sillas que conforman al juego realizadas en la misma madera y con tela de tapiceria y sistema Aquaclean, rellenas de guata siliconada para asegurar la comodidad.'
},

{ 
    id: 1 ,
    nombre: 'Juego de comedor Roble',
    src:'./Media/Productos/living/2.jpg',
    precio: 6990,
    detalle: 'El juego de comedor Roble tiene honor a su nombre en la composición ya que esta fabricado con madera de Roble, un juego de comedor de por vida. La mesa es para 8 comenzales, ideal para familias grandes o reuniones sociales. las sillas tienen un detalle labrado y están forradas con tela de tapiceria y sistema Aquaclean, su asiento esta relleno por guata siliconada.'

},

    { 
    id: 2 ,
    nombre: 'Juego de comedor Josephine',
    src:'./Media/Productos/living/3.jpg',
    precio: 12990,
    detalle: 'Moderno, alegre, luminoso. Todas esas características reune este juego de comedor para 6 comenzales. Realizado en madera lustrada y barnizada. El asiento de las sillas esta realizado en tela de tapiceria color gris y relleno con plancha de alta densidad y guata siliconada.'

},

{ 
    id: 3 ,
    nombre: 'Juego de comedor Antunez',
    src:'./Media/Productos/living/4.jpg',
    precio: 13990,
    detalle: 'Moderno y simple, un clasico automatico. Pensado para ambientes tanto joviales como serios. Creado en madera de pino, creado 100% a mano en uruguay.  '
},
    { 
    id: 4 ,
    nombre: 'Juego de comedor Peña',
    src:'./Media/Productos/living/5.jpg',
    precio: 20990,
    detalle: 'El juego de comedor Velvet es de estilo moderno, siendo su mesa de madera lustrada y tratada para no estropearse con el calor y los liquidos que puedan derramarse en ella. Las 6 sillas que conforman al juego realizadas en la misma madera y con tela de tapiceria y sistema Aquaclean, rellenas de guata siliconada para asegurar la comodidad.'

},

{ 
    id: 5 ,
    nombre: 'Juego de comedor Fernandez',
    src:'./Media/Productos/living/6.jpg',
    precio: 22990,
    detalle: 'Juego de comedor moderno, con estructura de madera, asiento y respaldo relleno de espuma y patas de madera de roble lacado.'

},
    { 
    id: 6 ,
    nombre: 'Juego comedor Manantiales',
    src:'./Media/Productos/living/7.jpg',
    precio: 35990,
    detalle: ' '
    },
{ 
    id: 7 ,
    nombre: 'Juego de comedor Cerrito',
    src:'./Media/Productos/living/8.jpg',
    precio: 37990,
    detalle: 'Moderno, alegre, luminoso. Todas esas características reune este juego de comedor para 6 comenzales. Realizado en madera lustrada y barnizada. El asiento de las sillas esta realizado en tela de tapiceria color gris y relleno con plancha de alta densidad y guata siliconada.'

}   

  ]

  $(document).ready(function(){
    load()
});


function load() {
    
    let nameUno = $('#cardTitleLivingUno');
    let imageUno = $('#cardImageLivingUno');

    let nameDos = $('#cardTitleLivingDos');
    let imageDos = $('#cardImageLivingDos');
    
    let nameTres = $('#cardTitleLivingTres');
    let imageTres = $('#cardImageLivingTres');
    
    let nameCuatro = $('#cardTitleLivingCuatro');
    let imageCuatro = $('#cardImageLivingCuatro');
    
    let nameCinco = $('#cardTitleLivingCinco');
    let imageCinco = $('#cardImageLivingCinco');
    
    let nameSeis = $('#cardTitleLivingSeis');
    let imageSeis = $('#cardImageLivingSeis');
    
    let nameSiete = $('#cardTitleLivingSiete');
    let imageSiete = $('#cardImageLivingSiete');
    
    let nameOcho = $('#cardTitleLivingOcho');
    let imageOcho = $('#cardImageLivingOcho');

    let counterProduct = $('#productCounter');
        
        nameUno.html(comedor[0].nombre);
        imageUno.attr("src",comedor[0].src)
        
        nameDos.html(comedor[1].nombre);
        imageDos.attr("src",comedor[1].src);
        
        nameTres.html(comedor[2].nombre);
        imageTres.attr("src",comedor[2].src);
        
        nameCuatro.html(comedor[3].nombre);
        imageCuatro.attr("src",comedor[3].src);

        nameCinco.html(comedor[4].nombre);
        imageCinco.attr("src",comedor[4].src);
        
        nameSeis.html(comedor[5].nombre);
        imageSeis.attr("src",comedor[5].src);
        
        nameSiete.html(comedor[6].nombre);
        imageSiete.attr("src",comedor[6].src);

        nameOcho.html(comedor[7].nombre);
        imageOcho.attr("src",comedor[7].src)
        
        counterProduct.html(comedor.length);
        
}

if(localStorage.getItem('Confirmacion') == 'Correcto'){
    
    let username = $('#nameUser')
    
    $(document).ready( function(){
        welcome()
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

let buttonValueOne = $('.buttonValueOne')

    buttonValueOne.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '0')

        })

    

let buttonValueDos = $('.buttonValueDos')

    buttonValueDos.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '1')
        
        })

let buttonValueTres = $('.buttonValueTres')

    buttonValueTres.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '2')

})

let buttonValueCuatro = $('.buttonValueCuatro')

    buttonValueCuatro.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '3')

})

let buttonValueCinco = $('.buttonValueCinco')

    buttonValueCinco.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '4')

})

let buttonValueSeis = $('.buttonValueSeis')

    buttonValueSeis.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '5')

})

let buttonValueSiete = $('.buttonValueSiete')

    buttonValueSiete.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '6')

})


let buttonValueOcho = $('.buttonValueOcho')

    buttonValueOcho.click(
        
        function(){
            sessionStorage.setItem('Id-Product', '7')

})



function searchBar() {

    var input = $("#searchbar").val();
    var counter = $("#productCounter");

    input = input.toLowerCase();

    var x = $(".cardTitles");
    var j = $(".cardLiving");
    

    for (i = 0; i < x.length; i++ ) {
        
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            console.log(input)

            j.eq([i]).show()
            counter.removeAttr("style").hide()

        } else {
            j.eq([i]).removeAttr("style").hide()
    }
}

}

let valueProductUno = $(".valueProductUno")

 valueProductUno.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Sillones')

})

let valueProductDos = $(".valueProductDos")

 valueProductDos.click(
     function() {

    sessionStorage.setItem('Seccion:', 'Living')

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