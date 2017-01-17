$(document).ready(function() {
    checkCookie('temporada');
});
// Checkeamos que exista la cookie
function checkCookie(cname) {
    // comprobamos  que valor tiene para el nombre especifico de la cookie
    var _cookie=getCookie(cname);
    if (_cookie == "") {
        setCookie(cname, 3);
        //el 3 indica el número de dias que tarda en expirar la cookie
    }
    else{
        var valor = getCookie(cname);
        console.log(valor);
    }
}
// Creamos  la cookie
function setCookie(cname, exdays) {
    var d = new Date();
    var cvalue = getSeason(d);
    var expires = "expires=" + d.toGMTString();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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


// obtenemos la estación del año segun la fecha del sistema que obtenga la cookie
function getSeason(data){
    var day = data.getDate();
    var month = data.getMonth();
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

var season = getSeason();
console.log(season);

function showPopup(argument) {
    
}

function applyStyles(){
    $( "h2" ).each(function() {
        if ($(this).hasClass()) {}
        $(this).addClass('')
    });
}