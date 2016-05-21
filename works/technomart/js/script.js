
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(55.755952,37.617322),
            zoom: 17,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
  {
    "featureType": "landscape",
    "stylers": [
      {
        "hue": "#F1FF00"
      },
      {
        "saturation": -27.4
      },
      {
        "lightness": 9.4
      },
      {
        "gamma": 1
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "hue": "#0099FF"
      },
      {
        "saturation": -20
      },
      {
        "lightness": 36.4
      },
      {
        "gamma": 1
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "hue": "#00FF4F"
      },
      {
        "saturation": 0
      },
      {
        "lightness": 0
      },
      {
        "gamma": 1
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "hue": "#FFB300"
      },
      {
        "saturation": -38
      },
      {
        "lightness": 11.2
      },
      {
        "gamma": 1
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "hue": "#00B6FF"
      },
      {
        "saturation": 4.2
      },
      {
        "lightness": -63.4
      },
      {
        "gamma": 1
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "hue": "#9FFF00"
      },
      {
        "saturation": 0
      },
      {
        "lightness": 0
      },
      {
        "gamma": 1
      }
    ]
  }
],
        }
        var mapElement = document.getElementById('tehno-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['ТЕХНОМАРТ', 'undefined', 'undefined', 'undefined', 'undefined', 55.755826, 37.6173, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
      if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
      if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
      if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}

var link = document.querySelector(".btn-popup");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".btn-form-close");

  link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        });
  close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });

  window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });
