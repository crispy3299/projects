    function initialize() {
    var locations = [
      ['Ho Chi Minh', 10.7546658, 106.4143457, 6],    
      ['Beijing', 39.9385449, 116.1165877, 5],
      ['Shanghai', 31.2231278, 120.9149255, 4],
      ['Kuala Lampur', 3.1385035, 101.6167773, 3],
      ['Manila', 14.5964957, 120.9444544, 2],
      ['Phnom Penh', 11.5793304, 104.7497569, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng(23.6257834, 106.0064205),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
  }

  window.onload = loadScript;