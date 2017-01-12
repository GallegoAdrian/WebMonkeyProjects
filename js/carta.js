getPage(getLanguage());
$(document).ready( function() {
});
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
            console.log(language);
            // title
            $('.titletarget').text(getSel(json.page.title, language));
            //description
             $('.description').text(getSel(json.page.description, language));
            console.log(json.categories);
            var acordeon = '<ul class="accordion">';
            jQuery.each(json.categories, function(key, value) {
                acordeon += '<li>'+
                      '<a class="toggle" href="javascript:void(0);">'+getSel(value.title, language)+'</a>'+
                      '<ul class="inner">';
                jQuery.each(value.dishes, function(key, value) {                   
                    acordeon += '<li>'+
                        '<div class="plato">'+
                            '<div class="titulo-plato">'+
                                '<h4>'+getSel(value.name, language)+'</h4>'+
                            '</div>'+
                            '<div class="desc-plato">'+
                                '<p>'+getSel(value.description, language)+'</p>'+
                            '</div>'+
                            '<div class="foto-plato">'+
                                '<img class="myImg" src="img/food/'+value.img+'" alt="Tallarines al Fungi">'+          
                            '</div>'+
                        '</div>'+
                        '</li>';
                });
            acordeon += '</ul></li>';
            });
            acordeon += '</ul>';

            $('#acordeontarget').append(acordeon);
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



/*







        <li>
          <a class="toggle" href="javascript:void(0);">Entrantes y Ensaladas</a>
          <ul class="inner">
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
          </ul>
        </li>










































      <ul class="accordion">
        <li>
          <a class="toggle" href="javascript:void(0);">Entrantes y Ensaladas</a>
          <ul class="inner">
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
          </ul>
        </li>
        <li>
          <a class="toggle" href="javascript:void(0);">Arroces y Pastas</a>
          <ul class="inner">
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
          </ul>
        </li>
        <li>
          <a class="toggle" href="javascript:void(0);">Pescados y Marisco</a>
          <ul class="inner">
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
          </ul>
        </li>
        <li>
          <a class="toggle" href="javascript:void(0);">Carnes</a>
          <ul class="inner">
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>
            <li>
            <div class="plato">
                <div class="titulo-plato">
                    <h4>Tallarines al Fungi</h4>
                </div>
                <div class="desc-plato">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="foto-plato">
                    <img class="myImg" src="img\food\spaghetti.png" alt="Tallarines al Fungi">          
                </div>
            </div>
            </li>   
          </ul>
        </li>
      </ul>

















*/