$(document).ready( function() {

$( "#form" ).submit(function( event ) {
  //event.preventDefault();
  if ($('#contact-name').val().trim() == "" || $('#contact-email').val().trim() == "" || $('#contact-message').val().trim() == "") {
  	$('#error-message').css("display","block");
  	
  }
  else{
  	$('#error-message').css("display","none");
  	$('#success-message').css("display","block");
  }
});

});





function getKnowUs(language) {
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/contact.json';
    
    var json = "";
    $.getJSON(url, function (data) {
        //var lang = '#'+idioma;
        var short;
        json = data;

        console.log(json);

        var map = '<h1 id="pagetitle">'+getSel(json.page.ubication, language)+'</h1>';

        var contact = '<h1 id="pagetitle">'+getSel(json.page.contactUs, language)+'</h1>'+
				        '<div class="form">'+
				        '<form id="form">'+
				              '<div class="form-group">'+
				                '<input type="text" class="form-control" value="" placeholder="'+getSel(json.page.form.name, language)+'" id="contact-name" />'+
				                '<label class="input-field-icon icon-user" for="login-name"></label>'+
				              '</div>'+

				              '<div class="form-group">'+
				                '<input type="email" class="form-control" value="" placeholder="'+getSel(json.page.form.email, language)+'" id="contact-email" />'+
				                '<label class="input-field-icon icon-email" for="login-email"></label>'+
				              '</div>'+
				              '<div class="form-group">'+
				                '<textarea class="form-control" value="" placeholder="'+getSel(json.page.form.message, language)+'" id="contact-message" rows="1"></textarea>'+
				              '</div>'+

				              '<button id="contact-send" class="btn-send">'+getSel(json.page.form.send, language)+'</button>'+

				              '<div id="error-message">'+getSel(json.page.form.errorMessage, language)+'</div>'+
				              '<div id="success-message">'+getSel(json.page.form.successMessage, language)+'</div>'+
				          '</form>'+
				          '</div>';

		$('#content-map').html(map);
        $('#content').html(contact);

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

getKnowUs(getLanguage());