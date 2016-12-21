$(document).ready( function() {
    getMenu(getLanguage());
});
var header = $('header'),
    minScroll = 50; // min distance to scroll before compacting header
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > minScroll) {
            $('.nbg').fadeOut();
            $('.bg').fadeIn();
            //header.removeClass('nbg').addClass('bg');
        }
        else {
            $('.bg').fadeOut();
            $('.nbg').fadeIn();
            //header.removeClass('bg').addClass('nbg');
        }
    });
    $( "#arrow" ).click(function() {
       $('html, body').animate({scrollTop:725}, 1000);
    });

//esta función coloca el menú en el div con id = "menutarget"
function getMenu(idioma) {
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/header.json';
    
    var json = "hola";
    $.getJSON(url, function (data) {
        var lang = '#'+idioma;
        var short;
        json = data;
        if (idioma == "ca") {
          short = json.ca;
        }
        else if(idioma == "en"){
          short = json.en;
        }
        else{
          short = json.es;
        }
        var menu = 
        '<header class="nbg">'+
              '<div id="logo">'+
                '<img src="img/header/Logo-degradado.png">'+
                '<div id="info">'+
                  '<p>Telf. 972 310 000</p>'+
                  '<p>C/ Creu 22, 17230, Palamós-Girona</p>'+
                '</div>'+
              '</div>'+
              '<nav>'+
                '<ul>'+
                  '<li><a href="index.html'+lang+'">'+short.home+'</a></li>'+
                  '<li><a href="menu.html'+lang+'">'+short.menu+'</a></li>'+
                  '<li><a href="carta.html'+lang+'">'+short.chart+'</a></li>'+
                  '<li><a href="conocenos.html'+lang+'">'+short.know_us+'</a></li>'+
                  '<li><a href="contacto.html'+lang+'">'+short.contact+'</a></li>'+
                  '<img id="myBtn" class="sun" src="img/header/sun-white.png" onClick="openModal();">'+
                '</ul>'+
              '</nav>'+
          '</header>'+
           '<header class="bg" hidden="true">'+
              '<div id="logo">'+
                '<img src="img/header/Logo-degradado2.png">'+
                '<div id="info">'+
                  '<p>Telf. 972 310 000</p>'+
                  '<p>C/ Creu 22, 17230, Palamós-Girona</p>'+
                '</div>'+
              '</div>'+
              '<nav>'+
                '<ul>'+
                  '<li><a href="index.html'+lang+'">'+short.home+'</a></li>'+
                  '<li><a href="menu.html'+lang+'">'+short.menu+'</a></li>'+
                  '<li><a href="carta.html'+lang+'">'+short.chart+'</a></li>'+
                  '<li><a href="conocenos.html'+lang+'">'+short.know_us+'</a></li>'+
                  '<li><a href="contacto.html'+lang+'">'+short.contact+'</a></li>'+
                  '<img id="myBtn2" class="sun" src="img/header/sun-black.png" onClick="openModal();">'+
                '</ul>'+
              '</nav>'+
          '</header>';
    $('#menutarget').html(menu);
    });
}
/* MODAL */
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

//cerrar modal tiempo
span.onclick = function() {
    modal.style.display = "none";
};
//cerrar modal tiempo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//abrir modal del tiempo
function openModal() {
    modal.style.display = "block";
}
/*/MODAL*/

/*es*/
//esta función coje el hash (#) del enlace url y identifica que es es segun eso, por defecto se pone en español
function getLanguage() {
    var url = window.location.href;
    var hash = url.substring(url.indexOf('#')+1);
    console.log(hash);
    if (hash == 'ca') {
        return 'ca';
    }
    else if(hash == 'en'){
      return 'en';
    }
    else{
        return 'es';
    }
}
/*/es*/