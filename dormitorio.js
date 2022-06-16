let camas=  [
    { 
    id: 0 ,
    nombre: 'Cama 1 plaza Yshree',
    src:'./Media/Productos/dormitorio/1.jpg',
    precio: 10990,
    detalle: 'Cama de una plaza, estilo nórdico. Lateral con doble cajonera y cuatro divisiones a la vista. Fabricada en madera de excelente calidad. Color Madera lustrada. El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'
},

{ 
    id: 1 ,
    nombre: 'Cama 2 plazas Domano',
    src:'./Media/Productos/dormitorio/2.png',
    precio: 33490,
    detalle: 'La Cama de 2 plazas Domano es una excelente opción para un cuarto moderno pero con un estilo refinado. Tanto el respaldo como el box están fabricados en madera de pino de gran resistencia y forrados en cuerina ecológica. El respaldo es capitoneado y relleno con guata siliconada. El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura '

},

    { 
    id: 2 ,
    nombre: 'Cama 2 plazas Whoton',
    src:'./Media/Productos/dormitorio/3.png',
    precio: 36990,
    detalle: 'La cama de dos plazas Whoton es la opción perfecta si buscas una cama clásica pero con un toque moderno. Su estructura esta fabricada en caños de alumino de gran calidad que ofrecen una estructura resistente pero liviana. Está forrado con tela de tapicera aterciopelada. El respaldo capitoneado y con una leve inclinación ofrecen la comodidad perfecta para recostarse a disfrutar de un buen libro.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura '

},

{ 
    id: 3 ,
    nombre: 'Cama 2 plazas Colomb',
    src:'./Media/Productos/dormitorio/4.png',
    precio: 28990,
    detalle: 'La cama de 2 plazas Colomb está fabricada en mdf de 2 cm de espesor garantizando una buena estructura. La mezcla de colores caoba y madera lustrada además de su diseño recto te transportan directamente a un estilo japones.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'

},
    { 
    id: 4 ,
    nombre: 'Cama 2 plazas FreeTo',
    src:'./Media/Productos/dormitorio/5.jpg',
    precio: 20990,
    detalle: 'La cama de 2 plaza FreeTo es la mezcla perfecta entre lo moderno y lo clásico, su respaldo de metro y medio de altura proporcionan la elegancia que le faltaba a tu dormitorio. La estructura del box y del respaldo es de aluminio de gran calidad, al igual que las 9 patas de 10 cm que la conforman. Está forrada con tela de tapiceria color gris.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'

},

{ 
    id: 5 ,
    nombre: 'Cama 2 plazas Exolis',
    src:'./Media/Productos/dormitorio/6.png',
    precio: 28990,
    detalle: 'La cama de 2 plazas Exolis esta compuesta por madera y lino ofreciendo un estilo caribeño pero moderno y fino. El box esta a la altura del piso al igual que el respaldo que mide un metro y medio comenzado desde el suelo.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'

},
    { 
    id: 6 ,
    nombre: 'Cama 2 plazas Susupa',
    src:'./Media/Productos/dormitorio/7.png',
    precio: 31990,
    detalle: 'La cama de 2 plazas Susupa, tiene un estilo moderno y neutro, compuesta por una estructura de bambu, por dentro con madera de pino. Forrada en lino color crudo.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'

},

{ 
    id: 7 ,
    nombre: 'Cama 2 plazas ArtWork',
    src:'./Media/Productos/dormitorio/8.jpg',
    precio: 48990,
    detalle: 'La cama de 2 plazas ArtWork es la modernidad en una cama. Su base redonda y al piso. Su respaldo relleno de guata siliconada hace que sea la comodidad que deseas a la hora de descansar. La tela aterciopelada es la suavidad reconfortante que estas deseando a la hora dormir pero también a la hora de despertarse. También cuenta con dos mesas de luz redondas unidas a la base por un caño de aluminio cromado.  El colchón viene en dos variantes: espuma de alta densidad, ortopédico o colchón de resortes de aluminio, ambos con 45cm de altura'
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
        
    nameUno.html(camas[0].nombre);
    imageUno.attr("src",camas[0].src)
    
    nameDos.html(camas[1].nombre);
    imageDos.attr("src",camas[1].src);
    
    nameTres.html(camas[2].nombre);
    imageTres.attr("src",camas[2].src);
    
    nameCuatro.html(camas[3].nombre);
    imageCuatro.attr("src",camas[3].src);

    nameCinco.html(camas[4].nombre);
    imageCinco.attr("src",camas[4].src);
    
    nameSeis.html(camas[5].nombre);
    imageSeis.attr("src",camas[5].src);
    
    nameSiete.html(camas[6].nombre);
    imageSiete.attr("src",camas[6].src);

    nameOcho.html(camas[7].nombre);
    imageOcho.attr("src",camas[7].src);

    
    counterProduct.html(camas.length)
        
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

let buttonValueSeis = $('buttonValueSeis')

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