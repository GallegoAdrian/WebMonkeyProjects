(function( win ) {

	win.myLanguageFunctions = win.myLanguageFunctions || {};

	/*es*/
//esta función coje el hash (#) del enlace url y identifica que es es segun eso, por defecto se pone en español
function getLanguage() {

    var userLang = navigator.language || navigator.userLanguage; 

    var url = window.location.href;
    var hash = url.substring(url.indexOf('#')+1);
    var language = "";

    if (hash == 'ca') {
      language = 'ca';
    }
    else if(hash == 'en'){
      language = 'en';
    }
    else if(hash == 'es'){
      language = 'es';
    }
    else{
      if(userLang.indexOf('es') >= 0 ){
        language = 'es';
      }
      else if(userLang.indexOf('en') >= 0 ){
        language = 'en';
      }
      else if(userLang.indexOf('ca') >= 0 ){
        language = 'ca';
      }
      else{
        language = 'es';
      }
    }

    $("."+language+"").addClass("select-language");

    return language;
}
/*/es*/

	function getLanguageWord(data, lang) {
	    if (lang == 'ca') {
	        return data.ca;
	    } else if(lang == 'en') {
	        return data.en;
	    } else{
	        return data.es;
	    }
	}

	win.myLanguageFunctions.getLanguage      = getLanguage;
	win.myLanguageFunctions.getLanguageWord  = getLanguageWord;

})( window );