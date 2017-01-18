var avui = new Date();
var now = getSeason(avui.getDate(), avui.getMonth()+1);
var before = checkCookie('temporada');
setCookieSeason(10*30);


$(document).ready(function() {

    getKnowUs(getLanguage());
     if (before !== now && before !== 'empty') {
        /*showPopup('You should visit the new menu');*/
        showPopup();
    }

    $('.season-items').on('click', 'span', function(data) {
        
        //Si se pone texto en el span cambiar currentTarget por target
        changeSeason(data.currentTarget.attributes[0].value);

    });

    applyStyles(now);

});
// Checkeamos que exista la cookie
function checkCookie(cname) {
    // comprobamos  que valor tiene para el nombre especifico de la cookie
    var response = getCookie(cname);
    if (response == "") {
        setCookieSeason(10*30);
        //el 3 indica el número de dias que tarda en expirar la cookie
        
        return 'empty';
    }
    else{
        var valor = getCookie(cname);

        return valor;
    }
}

// Obtenemos el valor de la cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Creamos  la cookie
function setCookieSeason(exdays) {

    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    var month = d.getMonth();
    var day = d.getDate();
    var season = now;
    // console.log('exec | '+expires);

    document.cookie = "temporada=" + season + ";" + expires + ";path=/";
}



// obtenemos la estación del año segun la fecha del sistema que obtenga la cookie
function getSeason(day, month, callback){
    // console.log(day+' | '+month);

    var season = "";
    switch(month){
        case 12 && day >= 22:
        case 1:
        case 2:
        case 3 && day < 20:
            season = "winter";
        break;
        case 3 && day >= 20:
        case 4:
        case 5:
        case 6 && day < 21:
            season = "spring";
        break;
        case 6 && day <= 21:
        case 7:
        case 8:
        case 9 && day < 21:
            season = "summer";
        break;
        case 9 && day >= 21:
        case 10:
        case 11:
        case 12 && day < 22:
            season = "autumn";
        break;
    }
    return season;
}

/*var season = getSeason();
console.log(season);*/

function showPopup() {
    var modal = document.getElementById('myModalCookie');
    modal.style.display = "block";
    
}



function getKnowUs(language) {

    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/cookie.json';
    var json = "";
    $.getJSON(url, function (data) {
        //var lang = '#'+idioma;
        console.log(data);
        // // var short;
        json = data;

        var cookie = '<span>'+getSel(json.cookie.message, language)+'</span>'+
                    '<a href="menu.html">'+getSel(json.cookie.optionYes, language)+'</a>'+
                    '<a href="index.html">'+getSel(json.cookie.optionNo, language)+'</a>';

        

        $('#content-cookie').html(cookie);

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





function applyStyles(season){
    $( "h2" ).each(function() {
        if (season == "winter") {
            $(this).css("color", "#717581");
        } else if (season == "spring"){
            $(this).css("color", "#ff7a66");
        } else if (season == "summer"){
            $(this).css("color", "#8f9ec7");
        } else if (season == "autumn"){
            $(this).css("color", "#bb201e");
        } else {
            
        }
    });
}
function changeSeason(season) {
    var d = new Date();
    d.setTime(d.getTime() + (5*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "temporada=" + season + ";" + expires + ";path=/";
    applyStyles(getCookie('temporada'));
}


var modalCookie = document.getElementsByClassName('mymodalCookie')[0];
//cuando hagamos cualquier clic en la pantalla del navegador se activa
//la funcion y compureba donde hemos hecho el clic
window.onclick = function(event) {
  //Comprobamos si el clic esta dentro de nuestro modalCookie
  if (event.target == modalCookie) {
    //Hacemos que el modalCookie desaparezca
    $(modalCookie).fadeOut();
     //Aqui volvemos a poner en nuestro css que el overflow este auto
     $("body").css({"position": "relative", "overflow-y": "auto","width": "100%"});
     $("body").css({"top": 0});
     $(window.document).scrollTop(altura);
  }
};