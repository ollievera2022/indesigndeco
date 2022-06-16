let sillones=  [
    { 
    id: 0 ,
    nombre: 'Bucata Velvet',
    src:'./Media/Productos/BucataDos.jpg',
    precio: 7990,
    detalle: 'Butaca moderna redondeada, con estructura de madera, asiento y respaldo relleno de espuma HR 30 KG y patas de madera de roble lacado.'
},

{ 
    id: 1 ,
    nombre: 'Bucata Aristocrata',
    src:'./Media/Productos/BucataUno.jpg',
    precio: 6990,
    detalle: 'Butaca de respaldo alto y posabrazos, ideal para espacios de lectura y descanso Desconectate y disfrutá de una serie , peli o libro en la comodidad de esta butaca'

},

    { 
    id: 2 ,
    nombre: 'Sillón 2 cuerpos Chesterfield',
    src:'./Media/Productos/SillonDosCuerposUno.jpg',
    precio: 12990,
    detalle: 'Los sillones y sofás Chesterfield también conocidos como Chester, son versátiles y emblemáticos. Este icono del estilo clásico Inglés data de principios del siglo XIX y según su origen documentado eran empleados para ambientar los exclusivos clubes sociales londinenses'

},

{ 
    id: 3 ,
    nombre: 'Sillón 2 cuerpos Valencia',
    src:'./Media/Productos/SillonDosCuerposDos.jpg',
    precio: 13990,
    detalle: 'Sillón 2 cuerpos ecologico, ideal para espacios reducidos. Almohadones rellenos de espuma de alta densidad, HR 40KG.'
},
    { 
    id: 4 ,
    nombre: 'Sillón 3 cuerpos Natacha',
    src:'./Media/Productos/SillonTresCuerposUno.jpg',
    precio: 20990,
    detalle: 'El sillón Natacha, es nuestra recomendacion. Diseñado para el hogar, super cómodo, forrado en terciopelo y en tela antimanchas. El amigo ideal para la familia'
},

{ 
    id: 5 ,
    nombre: 'Sillón 3 cuerpos Genta',
    src:'./Media/Productos/SillonTresCuerposDos.jpg',
    precio: 22990,
    detalle: 'Genta es un diseño creado por la casa, único. Especial para los amantes del diseño, 100% cuero nacional. Una gema'
},
    { 
    id: 6 ,
    nombre: 'Juego Sillones Maldonado',
    src:'./Media/Productos/JuegoSillonDosCuerposDos.jpg',
    precio: 35990,
    detalle: 'El juego Maldonado, es aquel diseñado para los amantes de lo audiovisual. 100% cuero nacional, lo que permite una fácil limpieza. Su característica más destacable: Su mesa revatible con posavasos.'
},

{ 
    id: 7 ,
    nombre: 'Juego Sillones Noruega',
    src:'./Media/Productos/JuegoSillonDosCuerposUno.jpg',
    precio: 37990,
    detalle: 'El modelo Noruega, un modelo clásico. En cuero sintético, el juego que no puede faltar.'
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
        
        nameUno.html(sillones[0].nombre);
        imageUno.attr("src",sillones[0].src)
        
        nameDos.html(sillones[1].nombre);
        imageDos.attr("src",sillones[1].src);
        
        nameTres.html(sillones[2].nombre);
        imageTres.attr("src",sillones[2].src);
        
        nameCuatro.html(sillones[3].nombre);
        imageCuatro.attr("src",sillones[3].src);

        nameCinco.html(sillones[4].nombre);
        imageCinco.attr("src",sillones[4].src);
        
        nameSeis.html(sillones[5].nombre);
        imageSeis.attr("src",sillones[5].src);
        
        nameSiete.html(sillones[6].nombre);
        imageSiete.attr("src",sillones[6].src);

        nameOcho.html(sillones[7].nombre);
        imageOcho.attr("src",sillones[7].src);
    
        
        counterProduct.html(sillones.length)
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