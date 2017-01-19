getPage(getLanguage());

$(document).on('click', '.toggle', function(e) {
// $('.toggle').click(function(e) {
  	e.preventDefault();
  	
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

function getPage(language){ 
    var fullurl = window.location.href;
    var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/chart.json';
    var json = '';
    $.getJSON(url, function(data) {
        json = data;

        // title
        $('.titletarget').text(getSel(json.page.title, language));
        //description
         $('.description').text(getSel(json.page.description, language));
        var acordeon = '<ul class="accordion">';
        var count = 0;
        jQuery.each(json.categories, function(key, value) {
            count++;
            acordeon += '<li class="carta-platos">'+
                  '<a class="toggle carta'+count+'" href="javascript:void(0);">'+getSel(value.title, language)+'</a>'+
                  '<ul class="inner">';
            jQuery.each(value.dishes, function(key, value) {
                acordeon += '<li>'+
                    '<div class="plato">'+
                        '<div class="cont-plato">'+
                            '<h3>'+getSel(value.name, language)+'</h3>'+
                            '<p>'+getSel(value.description, language)+'</p>'+
                         '</div>'+
                        '<img alt="'+getSel(value.description, language)+'" class="myImg" src="img/food/'+value.img+'" alt="'+value.altDesc +'">'+
                    '</div>'+
                    '</li>';
            });
        acordeon += '</ul></li>';
        });
        acordeon += '</ul>';
        $('#acordeontarget').append(acordeon);
    });
}

$(document).on('click', '.myImg', function(){
    //cojemos la ruta de la imagen pequeña y la transformamos a la grande
    var res = this.src.replace("img/food/", "img/food/big/");
    //pon visible la modal
    $('#myModalCarta').css('display', 'block');
    //pon la imagen grande como imagen de la modal
    $('#img01').attr('src', res);
    //pon la descripción a la modal
    $('#caption').text(this.alt);
    //al clickar a la cruz, cierra la modal
});

$('#myModalCarta').on('click','.close-carta', function(){
    $('#myModalCarta').css('display', 'none');
});

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