(function($, myLanguageFunctions) {

  $(document).ready( function() {
  // Every six seconds execute the switchSlide() function

  $('#video_list ul li img').click(function(){
     $('.selected').removeClass('selected');
     $(this).addClass('selected');
  });

  getKnowUsText(myLanguageFunctions.getLanguage());

  setInterval( "switchSlide()", 6000);
  });

  function getKnowUsText(language) {
      var fullurl = window.location.href;
      var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/know_us.json';

      $.getJSON(url, function (data) {

          var knowUs = '<h2 id="pagetitle">'+myLanguageFunctions.getLanguageWord(data.page.title, language)+'</h2>'+
                       '<p>'+myLanguageFunctions.getLanguageWord(data.page.description, language)+'</p>';

          var staff = '<div class="personal-right">'+
                          '<img src="img/kwnow_us/personal/fundadora.jpg" >'+
                          '<div>'+
                              '<h2 class="subtitles">'+myLanguageFunctions.getLanguageWord(data.page.staff.founder.name, language)+'</h2>'+
                              '<span>'+myLanguageFunctions.getLanguageWord(data.page.staff.founder.description, language)+'</span>'+
                          '</div>'+
                      '</div>'+
                '<div class="personal-left">'+
                  '<img src="img/kwnow_us/personal/chef.jpg" >'+
                  '<div>'+
                      '<h2 class="subtitles">'+myLanguageFunctions.getLanguageWord(data.page.staff.chef.name, language)+'</h2>'+
                      '<span>'+myLanguageFunctions.getLanguageWord(data.page.staff.chef.description, language)+'</span>'+
                  '</div>'+
                '</div>'+
                '<div class="personal-right">'+
                  '<img src="img/kwnow_us/personal/manoderechachef.jpg" >'+
                  '<div>'+
                    '<h2 class="subtitles">'+myLanguageFunctions.getLanguageWord(data.page.staff.rightHandchef.name, language)+'</h2>'+
                    '<span>'+myLanguageFunctions.getLanguageWord(data.page.staff.rightHandchef.description, language)+'</span>'+
                  '</div>'+
                '</div>'+
                '<div class="personal-left">'+
                  '<img src="img/kwnow_us/personal/ayudantechefs.jpg" >'+
                  '<div>'+
                    '<h2 class="subtitles">'+myLanguageFunctions.getLanguageWord(data.page.staff.helperChef.name, language)+'</h2>'+
                    '<span>'+myLanguageFunctions.getLanguageWord(data.page.staff.helperChef.description, language)+'</span>'+
                  '</div>'+
                '</div><h2 class="subtitles">Palamós</h2> <p> shoduashid ushdai udhasdi sadhu siudsh daisudhasiduashd asidu hsdusdha sidush disudh aisudhaiduah sid</p>';

          $('#descriptionKnowUs').html(knowUs);
          $('#personal').html(staff);
          applyStyles(now);

      });
  }

})(jQuery, myLanguageFunctions);

// This function takes the first .slide element and put at the end
function switchSlide() {
    var slide = $('#slider .slide:first');
    slide.hide();
    $('#slider').append(slide);
    slide.fadeIn('slow');
    }

    $(document).ready( function() {
    	
    	$( "#video_list ul li" ).click(function() {
    	  	$video='';
    	  	var index = $('#video_list ul li').index(this);

    		if(index === 1){
    			$video = $('<video src="video/El Mercat de Palamós.mp4" width="400" controls></video>');
    		}else if (index === 2){
    			$video = $('<iframe src="https://www.youtube.com/embed/eOx_mil55uE" frameborder="0" allowfullscreen></iframe>');	
    		}else if (index === 3){
    			$video = $('<iframe src="https://www.youtube.com/embed/8f-ZYWHzWFA" frameborder="0" allowfullscreen></iframe>');	
        }else{
          $video = $('<iframe src="https://www.youtube.com/embed/aFCeI6VAoPU" frameborder="0" allowfullscreen></iframe>');  
    		}


		$("#reproductor").html($video);
	});
});