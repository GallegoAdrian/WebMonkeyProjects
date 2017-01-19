(function($, myLanguageFunctions) {

    getChart(myLanguageFunctions.getLanguage());

    $(document).on('click', '.toggle', function(e) {

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

    function getChart(language){ 
        var fullurl = window.location.href;
        var url = fullurl.substring(0, fullurl.lastIndexOf("/")+1)+'json/chart.json';

        $.getJSON(url, function(data) {
            // title
            $('.titletarget').text(myLanguageFunctions.getLanguageWord(data.page.title, language));
            //description
             $('.description').text(myLanguageFunctions.getLanguageWord(data.page.description, language));
            var acordeon = '<ul class="accordion">';
            var count = 0;
            jQuery.each(data.categories, function(key, value) {
                count++;
                acordeon += '<li class="carta-platos">'+
                      '<a class="toggle carta'+count+'" href="javascript:void(0);">'+myLanguageFunctions.getLanguageWord(value.title, language)+'</a>'+
                      '<ul class="inner">';
                jQuery.each(value.dishes, function(key, value) {
                    acordeon += '<li>'+
                        '<div class="plato">'+
                            '<div class="cont-plato">'+
                                '<h3>'+myLanguageFunctions.getLanguageWord(value.name, language)+'</h3>'+
                                '<p>'+myLanguageFunctions.getLanguageWord(value.description, language)+'</p>'+
                             '</div>'+
                            '<img alt="'+myLanguageFunctions.getLanguageWord(value.description, language)+'" class="myImg" src="img/food/'+value.img+'" alt="'+value.altDesc +'">'+
                        '</div>'+
                        '</li>';
                });
            acordeon += '</ul></li>';
            });
            acordeon += '</ul>';
            $('#acordeontarget').append(acordeon);
        });
    }


})(jQuery, myLanguageFunctions);

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