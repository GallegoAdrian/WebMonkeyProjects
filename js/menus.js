/////////// Top Slider Menús//////////////////////
getPage(getLanguage());
$(document).ready( function() {
  
  getSeason();

// Cada seis segundos se ejecuta elswitchSliede() funtion.
setInterval( "switchSlide()", 6000);
});
// Esta funcion coge el primer .slide elementa y lo pone al final
function switchSlide() {
var slide = $('#slider .slide:first');
slide.hide();
$('#slider').append(slide);
slide.fadeIn('slow');
}
var altura = 0;

////////// Modal Menús//////////////////
//Esta es la clase que hace de boton, y en el momento que haces
// click se activa la funcion

$(".bottom-title").on("click", ".myBtnMenu", function(){


  altura = $(window.document).scrollTop();
  $("body").css({"top": -altura});
  //Variable que contiene el numero del array para identifiacr 
  //el cuadrado con el que trabajar (esta funcion la hace el .index de jQuery)
  $index = $(".myBtnMenu").index( this );
  //Variable que contiene los elementos del cuadrado de su respectiva posicion(index)
  //(esta funcion la hace el .eq de jQuery)
  $elem = $( ".info-content-menu" ).eq($index);
  
  //Variable en la que clono el contendio de elem para que al llevarmela
  //a la modal no se borre(la funcion que uso para eso es .clone de jQuery)
  $clone = $elem.clone( true );

  //Variable que contiene un span con una X para hacer el boton para cerrar la modal
  $span = $('<span class="close2">×</span>');
  //Variable en la que junto la X($span) + el contendio clonado($clone)
  //(lo hago con la funcion .add de jQuery)
  $more = $span.add($clone);
  $botoDownload = $('<button id="boton">Generate PDF</button>');
  
  $menu = $more.add($botoDownload);
  
  //$(".info-content-menu").append($botoDownload);
  //La funcion .html añade los elementos + la X que tenemos en la 
  //variable ($more) en la clase que pongamos, (esta funcion la hacemos con .html de jQuery)
  $(".modal-content-menu").html($menu);

  //Variable en la que junto la X($span) + el contendio clonado($clone)
  //(lo hago con la funcion .add de jQuery)
  //$moreBtn = $botoDownload.append($clone);

  
  //La funcion fadeIn hace que nos muestre la modal añadiendo un efecto de entrada
  $(".myModalMenu").fadeIn();
  //La funcion .css en este caso hace que añadamos al "body" el overflow: hidden,
  //para hacer desaparecer el segundo scroll que sale cuando abrimos la modal.
  //Este cambio solo se aplica cuando se abre la modal
  $("body").css({"position": "fixed", "overflow-y": "scroll","width": "100%"});
  //Aqui se acaba todas las funciones que hace el JS cuando lo abrimos.
});
//Hacemos una funcion que haga que cuando haces clic a "close2" se cierre la modal
//Señalamos especificamente con la funcion .on que se aplique al hacer clic en "close2"
$(".modal-content-menu").on("click", "span.close2", function(){
    //La funcion fadeOut hace que ya no se muestre la modal con un efecto de salida
    
    $(".myModalMenu").fadeOut();
    //Aqui volvemos a poner en nuestro css que el overflow este auto
    $("body").css({"position": "relative", "overflow-y": "auto","width": "100%"});
    $("body").css({"top": 0});

    $(window.document).scrollTop(altura);
    //Aqui acaba la funcion para cerrar la modal desde la "X"
});
//Esta parte sirve solo para poder cerrar la modal sin hacer uso de "close2"
//sino haciendo clic fuera de la modal.
//Aqui creamos una variable la cual recogemos el contenido de la clase myModalMenu
//para luego usarla mas abajo
var modalMenu = document.getElementsByClassName('myModalMenu')[0];
//cuando hagamos cualquier clic en la pantalla del navegador se activa
//la funcion y compureba donde hemos hecho el clic
window.onclick = function(event) {
  //Comprobamos si el clic esta dentro de nuestro modalMenu
  if (event.target == modalMenu) {
    //Hacemos que el modalMenu desaparezca
    $(modalMenu).fadeOut();
     //Aqui volvemos a poner en nuestro css que el overflow este auto
     $("body").css({"position": "relative", "overflow-y": "auto","width": "100%"});
     $("body").css({"top": 0});
     $(window.document).scrollTop(altura);
  }
};
//////////////Menús temporadas/////////////////////////
function getSeason() {
    var month = moment().format("M"); 
    var season = '';

    switch(month) {
        case '12':
        case '1':
        case '2':
            season = '<div class="square-menus menu6" id="mySpecialButton">'+
                        '<div id="menu-special">'+
                            '<h3>Menú Invierno</h3>'+
                            '<p>Un completo Menú de Mariscada en Palamós para disfrutarla en pareja o en grupo de amigos, comidas o cenas de empresa, celebraciones familiares...</p>'+
                              '<ul>'+
                              '<li>···</li>'+
                                '<li>Primer Plato</li>'+
                                '<li>Primer Plato</li>'+
                              '<li>···</li>'+
                                '<li>Segundo Plato</li>'+
                                '<li>Segundo Plato</li>'+
                              '<li>···</li>'+
                                '<li>Postres caseros</li>'+
                              '<li>···</li>'+
                                '<li>Vino y bebidas</li>'+
                                '<li>Cafés</li>'+
                              '<li>···</li>'+
                              '</ul>'+
                            '<span>10,00€</span>'+
                            //'<img class ="iconos" src="img/menus/gluten.png">'+
                            //'<img class ="iconos" src="img/menus/vegetariano.png">'+
                            //'<img class ="iconos" src="img/menus/vaca.png">'+
                        '</div>'+               
                      '</div>';
        break;
        case '3':
        case '4':
        case '5':
            season = '<div class="square-menus menu6" id="mySpecialButton">'+
                        '<div class="menu-special">'+
                            '<h3>Menú Primavera</h3>'+
                            '<p>Un completo Menú de Mariscada en Palamós para disfrutarla en pareja o en grupo de amigos, comidas o cenas de empresa, celebraciones familiares...</p>'+
                              '<ul>'+
                              '<li>···</li>'+
                                '<li>Primer Plato</li>'+
                                '<li>Primer Plato</li>'+
                              '<li>···</li>'+
                                '<li>Segundo Plato</li>'+
                                '<li>Segundo Plato</li>'+
                              '<li>···</li>'+
                                '<li>Postres caseros</li>'+
                              '<li>···</li>'+
                                '<li>Vino y bebidas</li>'+
                                '<li>Cafés</li>'+
                              '<li>···</li>'+
                              '</ul>'+
                            '<span>10,00€</span>'+
                            //'<img class ="iconos" src="img/menus/gluten.png">'+
                            //'<img class ="iconos" src="img/menus/vegetariano.png">'+
                            //'<img class ="iconos" src="img/menus/vaca.png">'+
                        '</div>'+               
                      '</div>';
        break;
        case '6':
        case '7':
        case '8':
            season = '<div class="square-menus menu6" id="mySpecialButton">'+
                        '<div class="menu-special">'+
                            '<h3>Menú Verano</h3>'+
                            '<p>Un completo Menú de Mariscada en Palamós para disfrutarla en pareja o en grupo de amigos, comidas o cenas de empresa, celebraciones familiares...</p>'+
                              '<ul>'+
                              '<li>···</li>'+
                                '<li>Primer Plato</li>'+
                                '<li>Primer Plato</li>'+
                              '<li>···</li>'+
                                '<li>Segundo Plato</li>'+
                                '<li>Segundo Plato</li>'+
                              '<li>···</li>'+
                                '<li>Postres caseros</li>'+
                              '<li>···</li>'+
                                '<li>Vino y bebidas</li>'+
                                '<li>Cafés</li>'+
                              '<li>···</li>'+
                              '</ul>'+
                            '<span>10,00€</span>'+
                            //'<img class ="iconos" src="img/menus/gluten.png">'+
                            //'<img class ="iconos" src="img/menus/vegetariano.png">'+
                            //'<img class ="iconos" src="img/menus/vaca.png">'+
                        '</div>'+               
                      '</div>';
        break;
        case '9':
        case '10': 
        case '11':
            season = '<div class="square-menus menu6" id="mySpecialButton">'+
                        '<div class="menu-special">'+
                            '<h3>Menú Otoño</h3>'+
                            '<p>Un completo Menú de Mariscada en Palamós para disfrutarla en pareja o en grupo de amigos, comidas o cenas de empresa, celebraciones familiares...</p>'+
                              '<ul>'+
                              '<li>···</li>'+
                                '<li>Primer Plato</li>'+
                                '<li>Primer Plato</li>'+
                              '<li>···</li>'+
                                '<li>Segundo Plato</li>'+
                                '<li>Segundo Plato</li>'+
                              '<li>···</li>'+
                                '<li>Postres caseros</li>'+
                              '<li>···</li>'+
                                '<li>Vino y bebidas</li>'+
                                '<li>Cafés</li>'+
                              '<li>···</li>'+
                              '</ul>'+
                            '<span>10,00€</span>'+
                            // '<img class ="iconos" src="img/menus/gluten.png">'+
                            // '<img class ="iconos" src="img/menus/vegetariano.png">'+
                            // '<img class ="iconos" src="img/menus/vaca.png">'+
                        '</div>'+
                      '</div>';
        break;
    }
    $(".bottom-title").append(season);
}


$(".bottom-title").on("click", "#mySpecialButton", function(){

  altura = $(window.document).scrollTop();
  $("body").css({"top": -altura});
  //Variable que contiene el numero del array para identifiacr 
  //el cuadrado con el que trabajar (esta funcion la hace el .index de jQuery)
  $index = $(".myBtnMenu").index( this );
  //Variable que contiene los elementos del cuadrado de su respectiva posicion(index)
  //(esta funcion la hace el .eq de jQuery)
  $elem = $( "#menu-special" );
  
  //Variable en la que clono el contendio de elem para que al llevarmela
  //a la modal no se borre(la funcion que uso para eso es .clone de jQuery)
  $clone = $elem.clone( true );

  //Variable que contiene un span con una X para hacer el boton para cerrar la modal
  $span = $('<span class="close2">×</span>');
  //Variable en la que junto la X($span) + el contendio clonado($clone)
  //(lo hago con la funcion .add de jQuery)
  $more = $span.add($clone);
  $botoDownload = $('<button id="botonSpecial">Generate PDF</button>');
  
  $menu = $more.add($botoDownload);
  
  //$(".info-content-menu").append($botoDownload);
  //La funcion .html añade los elementos + la X que tenemos en la 
  //variable ($more) en la clase que pongamos, (esta funcion la hacemos con .html de jQuery)
  $(".modal-content-menu").html($menu);

  //Variable en la que junto la X($span) + el contendio clonado($clone)
  //(lo hago con la funcion .add de jQuery)
  //$moreBtn = $botoDownload.append($clone);

  
  //La funcion fadeIn hace que nos muestre la modal añadiendo un efecto de entrada
  $(".myModalMenu").fadeIn();
  //La funcion .css en este caso hace que añadamos al "body" el overflow: hidden,
  //para hacer desaparecer el segundo scroll que sale cuando abrimos la modal.
  //Este cambio solo se aplica cuando se abre la modal
  $("body").css({"position": "fixed", "overflow-y": "scroll","width": "100%"});
  //Aqui se acaba todas las funciones que hace el JS cuando lo abrimos.
});
//Hacemos una funcion que haga que cuando haces clic a "close2" se cierre la modal
//Señalamos especificamente con la funcion .on que se aplique al hacer clic en "close2"
$(".modal-content-menu").on("click", "span.close2", function(){
    //La funcion fadeOut hace que ya no se muestre la modal con un efecto de salida
    
    $(".myModalMenu").fadeOut();
    //Aqui volvemos a poner en nuestro css que el overflow este auto
    $("body").css({"position": "relative", "overflow-y": "auto","width": "100%"});
    $("body").css({"top": 0});

    $(window.document).scrollTop(altura);
    //Aqui acaba la funcion para cerrar la modal desde la "X"
});


////////////  PDF ////////////////

      $(".modal-content-menu").on("click", "#boton", function(){
          var doc = new jsPDF();
              var source = $(".modal-content-menu").html();
              var res = source.replace('<span class="close2">×</span>', "");
              var res2 = res.replace('<button id="boton">generate PDF</button>',"");
              var res3 = res2.replace('€'," Euros ");

              var specialElementHandlers = {
                  '#bypassme': function (element, renderer) {
                      return true;
                  }
              };
              doc.fromHTML(res3, 0.5, 0.5, {
                  'width': 75,'elementHandlers': specialElementHandlers
              });
              console.log(doc);

              doc.save("menu.pdf");
      });

      $(".modal-content-menu").on("click", "#botonSpecial", function(){
          var doc = new jsPDF();
              var source = $(".modal-content-menu").html();
              var res = source.replace('<span class="close2">×</span>', "");
              var res2 = res.replace('<button id="botonSpecial">generate PDF</button>',"");
              var res3 = res2.replace('€'," Euros ");

              var specialElementHandlers = {
                  '#bypassme': function (element, renderer) {
                      return true;
                  }
              };
              doc.fromHTML(res3, 0.5, 0.5, {
                  'width': 75,'elementHandlers': specialElementHandlers
              });
              console.log(doc);

              doc.save("menu.pdf");
      });

/*LANGUAGE: START*/

function getPage(language){ 
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/menu.json';
    var json = "";
    $.getJSON(url, function(data) {
            json = data;
            var menu = "";
            var count = 0;
            console.log(language);
            // title
            $('.titletarget').text(getSel(json.page.title, language));
              jQuery.each(json.menus, function(key, value) {                   
              count++;
                //console.log(value.title);
                  /*acordeon += '<li>'+
                      '<div class="plato">'+
                          '<div class="titulo-plato">'+
                              '<h4>'+getSel(value.name, language)+'</h4>'+
                          '</div>'+
                          '<div class="desc-plato">'+
                              '<p>'+getSel(value.description, language)+'</p>'+
                          '</div>'+
                          '<div class="foto-plato">'+
                              '<img class="myImg" src="img/food/'+value.img+'" alt="Tallarines al Fungi">'+          
                          '</div>'+
                      '</div>'+
                      '</li>';

        <div class="square-menus myBtnMenu menu1">
          <div class="info-content-menu menu">

                      */
                      console.log(value);
                menu += '<div class="square-menus myBtnMenu menu'+count+'">'+
                      '<div class="info-content-menu menu">'+
                          '<h3>'+getSel(value.title, language)+'</h3>'+
                          '<p>'+getSel(value.description, language)+'</p>'+
                            '<ul>';
                            var i = 1;
                            while (i <= 3){
                              menu += '<li>···</li>';
                              jQuery.each(value.dishes[i], function(keys, values) {
                                menu += '<li>'+getSel(values, language)+'</li>';
                              });
                              i++;
                            }
                            menu += '<li>···</li>';
                            jQuery.each(value.drinks, function(keys, values) {
                              menu += '<li>'+getSel(values, language)+'</li>';
                            });
                            menu += '<li>···</li></ul>';
                        menu += '<span>'+value.dishes.price+' €</span>'+
                    '</div>'+
                  '</div>';
              });
            //$('#acordeontarget').append(acordeon);
            $(".bottom-title").append(menu);
    });
}
function getSel(array, lang) {
    if (lang == 'ca') {
        return array.ca;
    }
    else if(lang == 'en'){
        return array.en;
    }
    else{
        return array.es;
    }
}

/*LANGUAGE: END*/