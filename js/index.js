$(document).ready( function() {
// Every six seconds execute the switchSlide() function
  setInterval( "switchSlide()", 6000);
  $( ".button" ).click(function() {
    if ($(this).hasClass('buttonsel')) {
      console.log('has class');
    }
    else{
      var id = $(this).children('p').text();
      setVisible(id);
    }
  });
});


// This function takes the first .slide element and put at the end
function switchSlide() {
/*  if (next == null) {
    
  }
  else{
  }    */
  $('#slider').children('.slide').each(function() {
    if ($(this).is(':visible')) {
      if ($(this).is(':last-child')) {
        $("#slider .slide:first").fadeIn('slow');
      }
      else{
        $(this).next().fadeIn('slow');
      }
      $(this).fadeOut('slow');
      return false;
    }
  });
  var sel = $( ".buttons" ).find(".buttonsel");
  if (sel.is(':last-child')) {
    $(".button").first().addClass("buttonsel");
  }
  else{
    sel.next().addClass("buttonsel");
  }
  //sel.css('background-color','red');
  sel.removeClass("buttonsel");
}

function setVisible(pos) {
  var count = 1;
  $('#slider').children('.slide').each(function() {
    if ($(this).is(':visible')) {
      $(this).fadeOut('slow'); 
    }
    else{
      if (pos == count) {
        $(this).fadeIn('slow');
      }
    }
    count++;
  });
  var ses = $('.slide p:contains("'+pos+'")');
  ses.parent().css('background-color', 'red');
}
/*
function goForward(){
  var slide = $('#slider .slide:first');
  slide.hide();
  $('#slider').append(slide);
  slide.fadeIn('slow');
  var sel = $( ".buttons" ).find(".buttonsel");
  if (sel.is(':last-child')) {
    $(".button").first().addClass("buttonsel");
  }
  else{
    sel.next().addClass("buttonsel");
  }
  //sel.css('background-color','red');
  sel.removeClass("buttonsel");
}
function goBackward() {
  
}*/