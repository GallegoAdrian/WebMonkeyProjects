$(document).ready( function() {
// Every six seconds execute the switchSlide() function

$('#video_list ul li img').click(function(){
   $('.selected').removeClass('selected');
   $(this).addClass('selected');
});

getKnowUs(getLanguage());
setInterval( "switchSlide()", 6000);
});
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


function getKnowUs(language) {
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/know_us.json';
    
    var json = "";
    $.getJSON(url, function (data) {
        //var lang = '#'+idioma;
        var short;
        json = data;

        console.log(json);

        var knowUs = '<h1 id="pagetitle">'+getSel(json.page.title, language)+'</h1>'+
                     '<p>'+getSel(json.page.description, language)+'</p>';

        var staff = '<div class="personal-right">'+
                        '<img src="img/kwnow_us/personal/fundadora.jpg" >'+
                        '<div>'+
                            '<h2>'+getSel(json.page.staff.founder.name, language)+'</h2>'+
                            '<span>'+getSel(json.page.staff.founder.description, language)+'</span>'+
                        '</div>'+
                    '</div>'+
              '<div class="personal-left">'+
                '<img src="img/kwnow_us/personal/chef.jpg" >'+
                '<div>'+
                    '<h2>'+getSel(json.page.staff.chef.name, language)+'</h2>'+
                    '<span>'+getSel(json.page.staff.chef.description, language)+'</span>'+
                '</div>'+
              '</div>'+
              '<div class="personal-right">'+
                '<img src="img/kwnow_us/personal/manoderechachef.jpg" >'+
                '<div>'+
                  '<h2>'+getSel(json.page.staff.rightHandchef.name, language)+'</h2>'+
                  '<span>'+getSel(json.page.staff.rightHandchef.description, language)+'</span>'+
                '</div>'+
              '</div>'+
              '<div class="personal-left">'+
                '<img src="img/kwnow_us/personal/ayudantechefs.jpg" >'+
                '<div>'+
                  '<h2>'+getSel(json.page.staff.helperChef.name, language)+'</h2>'+
                  '<span>'+getSel(json.page.staff.helperChef.description, language)+'</span>'+
                '</div>'+
              '</div>';

        $('#descriptionKnowUs').html(knowUs);
        $('#personal').html(staff);

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