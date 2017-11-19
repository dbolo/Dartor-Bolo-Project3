         //6.4281° N, 9.4295° W
      //6.3814386,-11.0029865
        var map;
        var liberia = {lat: 6.4281, lng: -9.0029865}
        

        
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: Liberia,
            zoom: 8
            
          });
          
           var marker = new google.maps.Marker({
            position: liberia,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: 'pic/marker-256.png'

          });

        }