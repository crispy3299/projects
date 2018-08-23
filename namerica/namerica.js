/*function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.7128, lng: -74.0060};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}*/

    function initialize() {
    var locations = [
      ['Chicago', 41.8781, -87.6298, 5],
      ['Denver', 39.7392, -104.9903, 4],
      ['New York', 40.7128, -74.0060, 3],
      ['St. Louis', 38.6270, -90.1994, 2],
      ['Boston', 42.3601, -71.0589, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: new google.maps.LatLng(39.0997, -94.5786),
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