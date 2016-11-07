 function initMap() {
        var uluru = {lat: 41.8505066, lng: 3.1298161};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
          
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
