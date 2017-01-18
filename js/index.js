$(document).ready( function() {
  getPage(getLanguage());
// Every six seconds execute the switchSlide() function
  setInterval( "switchSlide()", 6000);
  $( ".button" ).click(function() {
    if ($(this).hasClass('buttonsel')) {
    }
    else{
      var id = $(this).children('p').text();
      setVisible(id);
    }
  });
});


// This function takes the first .slide element and put at the end
function switchSlide() {
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
  var done = false;
  $('#slider').children('.slide').each(function() {
    if ($(this).css('opacity') < 1) {
    }
    if ($(this).is(':visible')) {
      $(this).fadeOut('slow');
    }
    else{

      if (pos == count) {
        $(this).fadeIn('slow');
        done = true;
      }
    }
    count++;
  });
  if (done == true) {
    var ses = $('.button p:contains("'+pos+'")');
    $('.buttons').find(".buttonsel").removeClass("buttonsel");
    ses.parent().addClass("buttonsel");
  }
}

function getPage(language) {
  var fullurl = window.location.href;
  var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/index.json';
    
  var json = "";
  $.getJSON(url, function (data) {
    var short;
    json = data;
    //horari title
    $('.timetarget').text(getSel(json.page.horari.title, language));

    //horari days
    $('.monday').text(getSel(json.page.horari.days['1'], language));
    $('.tuesday').text(getSel(json.page.horari.days['2'], language));
    $('.wednesday').text(getSel(json.page.horari.days['3'], language));
    $('.thursday').text(getSel(json.page.horari.days['4'], language));
    $('.friday').text(getSel(json.page.horari.days['5'], language));
    $('.saturday').text(getSel(json.page.horari.days['6'], language));
    $('.sunday').text(getSel(json.page.horari.days['7'], language));
    //cerrado
    $('.closedtarget').text(getSel(json.page.horari.closed, language));

    //promocions title
    $('.promtarget').text(getSel(json.page.promotions.title, language));
    jQuery.each(json.page.promotions.promotion, function(key, value) {
      var promo ="";
      promo = '<a href="'+value.url+'" target="_blank">'+
                '<div class="menu-promocions">'+
                    '<span>'+getSel(value.title, language)+'</span><span>'+getSel(value.valid, language)+'</span>'+
                '</div>'+
              '</a>';
    $('.contarget').append(promo);
    });
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