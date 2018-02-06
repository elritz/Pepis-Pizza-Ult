// Dark theme for Maps
const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
]


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 43.448280, lng: -80.459472},
    styles: mapStyle
  });

  
  var im = {
    url: "http://www.myiconfinder.com/uploads/iconsets/256-256-89fdce5084dbe77556cf99f7b22ae7e8-pin.png",
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25)
  };
   document.getElementById('get_location').onclick = function() {
     x = navigator.geolocation;
     x.getCurrentPosition(success, failure);
   
     function success(position){
       var lat = position.coords.latitude;
       var lng = position.coords.longitude;
       var coords = new google.maps.LatLng(lat, lng);
       console.log(lat, lng);

       var currentLocation = new google.maps.Marker({
         position: coords,
         map: map,
         icon: im
       });             
    }
  
    function failure() {
       $('body').append("<p> Nope it didnt work</p>");
   }
  };
  //Array Of Locations
  var marker = [
    
    {
    locations:{lat:43.4540762, lng:-80.4927792},
    iconImage:'img/icon_pizza.png',
    content: `
    <div class="popupW">
      <h4>Water Street</h4>
      <br>
      <div class="fa fa-map-marker"></div> <a target="_blank" href="https://www.google.com/maps/dir/43.453982,-80.4925346/Pepi's+Pizza/@43.4532057,-80.4937545,17.66z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x0:0x2395467bcb2e5e5b!2m2!1d-80.4928058!2d43.4540547">Directions: 87 Water St N</a>
      <p class="nearby"><b>Located Near Victoria and Weber downtown Kitchener</b></p>
      <div class="fa fa-phone"></div> <p>Phone:<a href="tel:5195786640"> 519-578-6640</a></p> 
      </div>
    </div>
    `
  },
  {
    locations:{lat:43.4383209, lng:-80.478925},
    iconImage:'img/icon_pizza.png',
    content: `
    <div class="popupC">
    <h4>Courtland Ave </h4>
    <br>
    <div class="fa fa-map-marker"></div> <a target="_blank" href="https://www.google.com/maps/dir/43.453982,-80.4925346/Pepi's+Pizza+King+E+-+Famous+Pizza+%26+Toasted+Subs,+2880+King+St+E,+Kitchener,+ON+N2A+1A7,+Canada/@43.4424984,-80.4800508,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x882b8b20eca5faad:0x686ebb5fd30c0b3c!2m2!1d-80.4362147!2d43.4301004">Directions: 2880 King St E</a>
    <p class="nearby"><b>Located Near Ottawa St and Courtland Ave</b></p>
    <div class="fa fa-phone"></div> <p>Phone:<a href="tel:5195780820"> 519-893-8144</a></p> 
    </div>
    `
  },
  {
    locations:{lat:43.429992, lng:-80.4362424},
    iconImage:'img/icon_pizza.png',
    content: `
    <div class="popupK">
    <h4>King Street</h4>
    <br>
    <div class="fa fa-map-marker"></div> <a target="_blank" href="https://www.google.com/maps/dir/43.453982,-80.4925346/Pepi's+Pizza/@43.4379528,-80.4791583,19.59z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x0:0x41a6bfee19c60de3!2m2!1d-80.4788599!2d43.4381794">Directions: 390 Courtland Ave E</a>
    <p class="nearby"><b>Located Near King St E and Fairway Rd</b></p>
    <div class="fa fa-phone"></div> <p>Phone:<a href="tel:5198938144"> 519-893-8144</a></p> 
    </div>
    `
  }

  ];

// Loop Through Marker
for(var i = 0; i < marker.length; i++){
  addMarker(marker[i]);
}

  function addMarker(props){
    var marker = new google.maps.Marker({
      position: props.locations,
      map: map,
    });
    if(props.iconImage){
      marker.setIcon(props.iconImage);
    }
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });
      marker.addListener('click', function() {
        infoWindow.open(map, marker); 
      });
      google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
      });
    }
  };

  var waterArea = [
    // QueenStreet
    {lat:43.450943, lng:-80.488237},
    {lat:43.438751, lng:-80.500447},
    {lat:43.436914, lng:-80.503114},
    {lat:43.434460, lng:-80.507419},
    {lat:43.430958, lng:-80.517085},
    {lat:43.430397, lng:-80.517815},
    {lat:43.428769, lng:-80.523641},
    // Fish
    {lat:43.436441, lng:-80.529132},
    // Victoria
    {lat:43.428907, lng:-80.552842},
    // Ira
    {lat:43.423052, lng:-80.552805},
    // Highland
    {lat:43.421969, lng:-80.556582},
    {lat:43.425047, lng:-80.561335},
    {lat:43.426886, lng:-80.562492},
    {lat:43.429325, lng:-80.562995},
    {lat:43.433404, lng:-80.556363},
    {lat:43.446128, lng:-80.571056},
    // Erb Street
    {lat:43.441966, lng:-80.584332},
    // Wilmot
    {lat:43.477486, lng:-80.623465},
    // Conservation
    {lat:43.479118, lng:-80.612276},
    // Westmount
    {lat:43.494260, lng:-80.569991},
    // Benjamin Rd
    {lat:43.498576, lng:-80.573162},
    // Weber Street
    {lat:43.504897, lng:-80.555511},
    // St Jacobs
    {lat:43.513847, lng:-80.556988},
    // HighwayCross
    {lat:43.511726, lng:-80.546589},
    // Bridge Street
    {lat:43.509546, lng:-80.542214},
    {lat:43.517966, lng:-80.518268},
    // University 
    {lat:43.517593, lng:-80.514545},
    {lat:43.518324, lng:-80.512367},
    {lat:43.518892, lng:-80.507164},
    {lat:43.518441, lng:-80.504750},
    {lat:43.519802, lng:-80.503870},
    {lat:43.521927, lng:-80.498187},
    {lat:43.520621, lng:-80.497308},
    {lat:43.520248, lng:-80.495392},
    // WoolWich
    {lat:43.517196, lng:-80.496493},
    // Back on university
    {lat:43.513698, lng:-80.498130},
    {lat:43.505765, lng:-80.497303},
    {lat:43.500149, lng:-80.493525},
    {lat:43.500558, lng:-80.491887},
    // Kiwanas Park
    {lat:43.502716, lng:-80.478295},
    
    {lat:43.509998, lng:-80.460789},
    // Bresleau
    {lat:43.501102, lng:-80.419643},
     // spitzig Rd
    {lat:43.491035, lng:-80.413175},
    // Victoria St
    {lat:43.486175, lng:-80.416877},
    {lat:43.477609, lng:-80.403494},
    {lat:43.472750, lng:-80.402036},
    {lat:43.471796, lng:-80.441288},
    {lat:43.464232, lng:-80.464712},
    // Krug St
    {lat:43.458845, lng:-80.456892},
    {lat:43.457341, lng:-80.461098},
    {lat:43.456048, lng:-80.462600},
    {lat:43.449343, lng:-80.481663},
    // Weber St
    {lat:43.451913, lng:-80.487457}
    // {lat:},
  ];
  var courlandArea = [
    // QueenStreet
    {lat:43.450943, lng:-80.488237},
    {lat:43.438751, lng:-80.500447},
    {lat:43.436914, lng:-80.503114},
    {lat:43.434460, lng:-80.507419},
    {lat:43.430958, lng:-80.517085},
    {lat:43.430397, lng:-80.517815},
    {lat:43.428769, lng:-80.523641},
    // Fish
    {lat:43.436441, lng:-80.529132},
    // Victoria
    {lat:43.428907, lng:-80.552842},
     // Ira
    {lat:43.423052, lng:-80.552805},
    // Highland
    {lat:43.420467, lng:-80.560673},
    // Trussler
    {lat:43.414583, lng:-80.554144},
    {lat:43.414591, lng:-80.553082},
    // Ira Needles
    {lat:43.412532, lng:-80.551795},
    {lat:43.396769, lng:-80.534459},
    // Bleams
    {lat:43.399398, lng:-80.520057},
    {lat:43.400694, lng:-80.501787},
    // HomerWatson
    {lat:43.410016, lng:-80.461296},
    {lat:43.418326, lng:-80.470688},
    // Blockline
    {lat:43.418786, lng:-80.467991},
    {lat:43.419254, lng:-80.465738},
    {lat:43.422387, lng:-80.462176},
    // Courtland
    {lat:43.425301, lng:-80.465599},
    {lat:43.427157, lng:-80.466394},
    {lat:43.428256, lng:-80.467456},
    // Highway
    {lat:43.430807, lng:-80.467169},
    {lat:43.431602, lng:-80.461057},
    {lat:43.434196, lng:-80.457710},
    // King Street
    {lat:43.436292, lng:-80.457039},
    // Stirling Av
    {lat:43.444270, lng:-80.477057},
    {lat:43.446407, lng:-80.475186},
    {lat:43.447256, lng:-80.474467},
    // Dumfries
    {lat:43.450255, lng:-80.465390},
    {lat:43.453753, lng:-80.469185},
    // Krug
    {lat:43.449319, lng:-80.481682},
    // Queen
    {lat:43.451928, lng:-80.487465}
  ];
  var kingArea =[
    // Dumfries
    {lat:43.453765, lng:-80.469183},
    // Stirling
    {lat:43.450236, lng:-80.465438},
    {lat:43.447226, lng:-80.474481},
    {lat:43.446416, lng:-80.475178},
    {lat:43.444282, lng:-80.477088},
    // King
    {lat:43.436309, lng:-80.456941},
     // Highway
     {lat:43.434196, lng:-80.457710},
     {lat:43.431602, lng:-80.461057},
     {lat:43.430807, lng:-80.467169},
      // Courtland
    {lat:43.428256, lng:-80.467456},
    {lat:43.427157, lng:-80.466394},
    {lat:43.425301, lng:-80.465599},
    // Blockline
    {lat:43.422389, lng:-80.462175},
    {lat:43.419257, lng: -80.465723},
    {lat:43.418786, lng:-80.467991},  
    // HomerWatson
    {lat:43.418326, lng:-80.470688},
    {lat:43.410016, lng:-80.461296},
    // Fischerhallman
    {lat:43.401662, lng:-80.496516},
    {lat:43.395800, lng:-80.494633},
    {lat:43.391793, lng:-80.491736},
    {lat:43.382270, lng:-80.488746},
    // Hurron
    {lat:43.384261, lng:-80.478109},
    {lat:43.381544, lng:-80.453682},
    // NewDundee Rd
    {lat:43.365443, lng:-80.439217},
    {lat:43.377668, lng:-80.410080},
    {lat:43.387870, lng:-80.403255},
    {lat:43.410338, lng:-80.391448},
    {lat:43.415073, lng:-80.405141},
    {lat:43.420210, lng:-80.409363},
    {lat:43.430771, lng:-80.405709},
    {lat:43.443357, lng:-80.387831},
    // Fountain
    {lat:43.448661, lng:-80.390603},
    {lat:43.453939, lng:-80.391816},
    {lat:43.461643, lng:-80.402790},
    {lat:43.472770, lng:-80.402061},
    // Bingemans
    {lat:43.471778, lng:-80.441283},
    // Victoria
    {lat:43.464226, lng:-80.464582},
    // River
    {lat:43.458825, lng:-80.456873},
    // Krug
    {lat:43.457268, lng:-80.461152},
    {lat:43.456385, lng:-80.462033}
  ]; 
  var waterArea = new google.maps.Polygon({
    paths: waterArea,
    strokeColor: '#f38125',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: '#f38125',
    fillOpacity: 0.35
  });
  var courlandArea = new google.maps.Polygon({
    paths: courlandArea,
    strokeColor: '#10FFC6',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: '#3a96ff',
    fillOpacity: 0.35
  });

  var kingArea = new google.maps.Polygon({
    paths: kingArea,
    strokeColor: '#ffdb3a',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    // fillColor: '#ffdb3a',
    fillOpacity: 0.35
  });

  waterArea.setMap(map);
  courlandArea.setMap(map);
  kingArea.setMap(map);

   // Create the search box and link it to the UI element.
   var input = document.getElementById('pac-input');
   var searchBox = new google.maps.places.SearchBox(input);
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

   // Bias the SearchBox results towards current map's viewport.
   map.addListener('bounds_changed', function() {
     searchBox.setBounds(map.getBounds());
   });

   var markers = [];
   // Listen for the event fired when the user selects a prediction and retrieve
   // more details for that place.
   searchBox.addListener('places_changed', function() {
     var places = searchBox.getPlaces();

     if (places.length == 0) {
       return;
     }

     // Clear out the old markers.
     markers.forEach(function(marker) {
       marker.setMap(null);
     });
     markers = [];
     // For each place, get the icon, name and location.
     var bounds = new google.maps.LatLngBounds();
     places.forEach(function(place) {
       if (!place.geometry) {
         console.log("Returned place contains no geometry");
         return;
       }
       var icon = {
         url: "http://www.myiconfinder.com/uploads/iconsets/256-256-89fdce5084dbe77556cf99f7b22ae7e8-pin.png",
         size: new google.maps.Size(71, 71),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(17, 34),
         scaledSize: new google.maps.Size(25, 25)
       };
       // Create a marker for each place.
       markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
   
  });

}