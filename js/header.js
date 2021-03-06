(function($, myLanguageFunctions) {

    $(document).ready( function() {

        getMenu(myLanguageFunctions.getLanguage());

        $('.menu-language').on('click', 'ul li a', function(data) {

          var urllang = window.location.href;

          var pos = urllang.indexOf('#');

          if (pos >= 0) {
            window.location = urllang.substring(0, pos)+'#'+$(this).val();
          }
          else{
            window.location = urllang+'#'+$(this).val();
          }
          location.reload(false);

        });

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
function getMenu(language) {
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/header.json';
    
    var json = "";
    $.getJSON(url, function (data) {
        var lang = '#'+ language;
        
        var menu = 
        '<header class="nbg">'+
              '<div id="logo">'+
                '<img alt="Logo La Bona Mar" src="img/header/Logo-degradado.png">'+
                '<div id="info">'+
                  '<p>Telf. 972 310 000</p>'+
                  '<p>C/ Creu 22, 17230, Palamós-Girona</p>'+
                '</div>'+
              '</div>'+
              '<nav id="menu-principal">'+
                '<ul>'+
                  '<li><a href="index.html'+lang+'">'+data[language].home+'</a></li>'+
                  '<li><a href="menu.html'+lang+'">'+data[language].menu+'</a></li>'+
                  '<li><a href="carta.html'+lang+'">'+data[language].chart+'</a></li>'+
                  '<li><a href="conocenos.html'+lang+'">'+data[language].know_us+'</a></li>'+
                  '<li><a href="contacto.html'+lang+'">'+data[language].contact+'</a></li>'+
                  '<img alt="Botón Tiempo" id="myBtn" class="sun" src="img/header/sun-white.png" onClick="openModal();">'+
                '</ul>'+
              '</nav>'+
          '</header>'+ 
           '<header class="bg" hidden="true">'+
              '<div id="logo">'+
                '<img alt="Logo La Bona Mar" src="img/header/Logo-degradado2.png">'+
                '<div id="info">'+
                  '<p>Telf. 972 310 000</p>'+
                  '<p>C/ Creu 22, 17230, Palamós-Girona</p>'+
                '</div>'+
              '</div>'+
              '<nav>'+
                '<ul>'+
                  '<li><a href="index.html'+lang+'">'+data[language].home+'</a></li>'+
                  '<li><a href="menu.html'+lang+'">'+data[language].menu+'</a></li>'+
                  '<li><a href="carta.html'+lang+'">'+data[language].chart+'</a></li>'+
                  '<li><a href="conocenos.html'+lang+'">'+data[language].know_us+'</a></li>'+
                  '<li><a href="contacto.html'+lang+'">'+data[language].contact+'</a></li>'+
                  '<img alt="Logo Tiempo" id="myBtn2" class="sun" src="img/header/sun-black.png" onClick="openModal();">'+
                '</ul>'+
              '</nav>'+
          '</header>';
    $('#menutarget').html(menu);
    });
}


})(jQuery, myLanguageFunctions);

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