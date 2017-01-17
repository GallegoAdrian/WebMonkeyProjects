// Creamos  la cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    cvalue = getEstacion(d, cvalue);
    var expires = "expires=" + d.toGMTString();
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

// Checkeamos que exista la cookie
function checkCookie() {
	var cname = "temporada";
    var cvalue = "winter";
    // comprobamos  que valor tiene para el nombre especifico de la cookie
    var _cookie=getCookie(cname);
    if (_cookie == "") {
        setCookie(cname, cvalue, 3);
    }
}

// obtenemos la estación del año segun la fecha del sistema que obtenga la cookie
function getEstacion(data, cvalue){
    var day = data.getDate();
    var month = data.getMonth();
    var season = cvalue;

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