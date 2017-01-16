$( "#form" ).submit(function( event ) {
  //event.preventDefault();
  if ($('#contact-name').val().trim() == "" || $('#contact-email').val().trim() == "" || $('#contact-message').val().trim() == "") {
  	alert('empty');
  	
  }
  else{
  	alert('Enviado');
  }
});