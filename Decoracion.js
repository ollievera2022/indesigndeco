let deco=  [
    { 
    id: 0 ,
    nombre: 'Flor plástica Anola',
    src:'./Media/Productos/decoracion/1.jpg',
    precio: 990,
    detalle: 'La flor plástica Anola,es el toque de color que le falta a ese rincón que queres alegrar. Su estilo japones aporta además de alegría por su color brillante, calma. Mide 35 cm de altura y es toda plástica tanto la planta como la maceta'
    }
,

{ 
    id: 1 ,
    nombre: 'Flor plástica Rosalia',
    src:'./Media/Productos/decoracion/2.jpg',
    precio: 1090,
    detalle: 'La flor plástica Rosalia es el objeto ideal para decorar un amplio espacio por su gran tamaño. La maceta mide 45 cm de diametro y 30 cm de altura. La altura total es 70 cm. Siendo toda de plástico. Su color es coral con unos toques de blanco.'

},

    { 
    id: 2 ,
    nombre: 'Florero Mepro',
    src:'./Media/Productos/decoracion/3.png',
    precio: 1290,
    detalle: 'El florero Mepro es aprueba de niños y mascotas inquietas porque parece vidrio pero es un resistente acrilico marmolado en amarillo y color crudo. Su forma curvada aporta elegancia y modernidad a cualquier rincón. Mide 25 cm de altura.  '

},

{ 
    id: 3 ,
    nombre: 'Florero Mazin',
    src:'./Media/Productos/decoracion/4.png',
    precio: 1490,
    detalle: 'El florero Mazin tiene un estilo moderno pero su diseño también te remonta a los años 60 por sus colores vibrantes y su diseño marmolado. Es de vidrio fino y su altura es de 30 cm'

},
    { 
    id: 4 ,
    nombre: 'Reloj de pared Nagmar',
    src:'./Media/Productos/decoracion/5.png',
    precio: 4990,
    detalle: 'El reloj de pared Nagmar mide 45 cm de diametro y esta fabricado en madera lustrada y barnizada. Tiene una gran variedad de detalles decorando a la perfección cualquier pared.'

},

{ 
    id: 5 ,
    nombre: 'Lámpara veladora Masala',
    src:'./Media/Productos/decoracion/6.png',
    precio: 3490,
    detalle: 'La lámpara veladora Masala es el artículo ideal para una casa de estilo Hindú, realizada en madera calada con una gran varierdad de detalles aporta una luz cálida que brinda un ambiente acogedor. Mide 30 cm de altura. '

},
    { 
    id: 6 ,
    nombre: 'Porta retrato Wheels',
    src:'./Media/Productos/decoracion/7.jpeg',
    precio: 490,
    detalle: 'El porta retrato Wheels está realizado en madera natural lustrada, aportando un toque moderno. Su tamaño es para una foto de 15 x 20 cm.'

},

{ 
    id: 7 ,
    nombre: 'Alejdrez Agarba',
    src:'./Media/Productos/decoracion/8.png',
    precio: 1990,
    detalle: 'Para los aficionados de la ajedrez este es el producto ideal, tablero de madera de 50cm x 50 cm que se convierte en caja para guardar las piezas también realizadas en madera. Barnizado y lustrado para asegurar su durabilidad.'

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
        
    nameUno.html(deco[0].nombre);
    imageUno.attr("src",deco[0].src)
    
    nameDos.html(deco[1].nombre);
    imageDos.attr("src",deco[1].src);
    
    nameTres.html(deco[2].nombre);
    imageTres.attr("src",deco[2].src);
    
    nameCuatro.html(deco[3].nombre);
    imageCuatro.attr("src",deco[3].src);

    nameCinco.html(deco[4].nombre);
    imageCinco.attr("src",deco[4].src);
    
    nameSeis.html(deco[5].nombre);
    imageSeis.attr("src",deco[5].src);
    
    nameSiete.html(deco[6].nombre);
    imageSiete.attr("src",deco[6].src);

    nameOcho.html(deco[7].nombre);
    imageOcho.attr("src",deco[7].src);

    
    counterProduct.html(deco.length)
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