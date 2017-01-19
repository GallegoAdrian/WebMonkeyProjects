(function($, myLanguageFunctions) {

    function getContactText(language) {
        var fullurl = window.location.href;
        var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/contact.json';

        $.getJSON(url, function (data) {

            var map = '<h2 id="pagetitle">'+myLanguageFunctions.getLanguageWord(data.page.ubication, language)+'</h2>';

            var contact = '<h2 id="pagetitle">'+myLanguageFunctions.getLanguageWord(data.page.contactUs, language)+'</h2>'+
                    '<div class="form">'+
                    '<form id="form">'+
                          '<div class="form-group">'+
                            '<input type="text" class="form-control" value="" placeholder="'+myLanguageFunctions.getLanguageWord(data.page.form.name, language)+'" id="contact-name" />'+
                            '<label class="input-field-icon icon-user" for="login-name"></label>'+
                          '</div>'+

                          '<div class="form-group">'+
                            '<input type="email" class="form-control" value="" placeholder="'+myLanguageFunctions.getLanguageWord(data.page.form.email, language)+'" id="contact-email" />'+
                            '<label class="input-field-icon icon-email" for="login-email"></label>'+
                          '</div>'+
                          '<div class="form-group">'+
                            '<textarea class="form-control" value="" placeholder="'+myLanguageFunctions.getLanguageWord(data.page.form.message, language)+'" id="contact-message" rows="1"></textarea>'+
                          '</div>'+

                          '<div class="btn-succes-container"><span id="contact-send" class="btn-send">'+myLanguageFunctions.getLanguageWord(data.page.form.send, language)+'</span></div>'+

                          '<div id="error-message">'+myLanguageFunctions.getLanguageWord(data.page.form.errorMessage, language)+'</div>'+
                          '<div id="success-message">'+myLanguageFunctions.getLanguageWord(data.page.form.successMessage, language)+'</div>'+
                          '<div id="error-mail">'+myLanguageFunctions.getLanguageWord(data.page.form.errorMail, language)+'</div>'+
                      '</form>'+
                      '</div>';

              $('#content-map').html(map);
              $('#content').html(contact);
              applyStyles(now);
              $( "#form" ).on('click','#contact-send',function( event ) {


                  var email = $('#contact-email').val();
                  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


                  if ($('#contact-name').val().trim() == "" || $('#contact-email').val().trim() == "" || $('#contact-message').val().trim() == "") {
                    $('#error-mail').css("display","none");
                    $('#success-message').css("display","none");
                    $('#error-message').css("display","block");
                  }else {

                    if (emailRegex.test(email)){
                        $('#error-message').css("display","none");
                        $('#error-mail').css("display","none");
                        $('#success-message').css("display","block");
                    } else {
                      $('#success-message').css("display","none");
                      $('#error-message').css("display","none");
                      $('#error-mail').css("display","block");
                    }
                  }

            });

        });
    }

 getContactText(myLanguageFunctions.getLanguage());

})(jQuery, myLanguageFunctions);

