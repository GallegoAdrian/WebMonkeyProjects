$(document).ready( function() {
// Every six seconds execute the switchSlide() function
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
		console.log(index);

		if(index === 1){
			$video = $('<video src="video/El Mercat de Palamós.mp4" width="400" controls></video>');
		}else if (index === 2){
			$video = $('<iframe src="https://www.youtube.com/embed/eOx_mil55uE" frameborder="0" allowfullscreen></iframe>');	
		}else if (index === 3){
			$video = $('<iframe src="https://www.youtube.com/embed/aFCeI6VAoPU" frameborder="0" allowfullscreen></iframe>');	
		}else{
			$video = $('<iframe src="https://www.youtube.com/embed/8f-ZYWHzWFA" frameborder="0" allowfullscreen></iframe>');	
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

        var knowUs = '<h1>'+getSel(json.page.title, language)+'</h1>'+
                     '<p>'+getSel(json.page.description, language)+'</p>';
    

    $('#descriptionKnowUs').html(knowUs);
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