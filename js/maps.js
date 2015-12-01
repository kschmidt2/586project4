var map;
function initMap() {
  var myLatLng = {lat: 48.9244, lng: 2.3600};
  var myLatLng2 = {lat: 48.871724, lng: 2.368174};
  var myLatLng3 = {lat: 48.871615, lng: 2.367858};
  var myLatLng4 = {lat: 48.868892, lng: 2.367892};
  var myLatLng5 = {lat: 48.853763, lng: 2.381989};
  var myLatLng6 = {lat: 48.850370, lng: 2.393098};
  var myLatLng7 = {lat: 48.863623, lng: 2.371341};

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 48.8867, lng: 2.3508},
  zoom: 11,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Stadium'
  });
//   marker.addListener('click', function() {
//   infowindow.open(map, marker);
// });

var marker2 = new google.maps.Marker({
  position: myLatLng2,
  map: map,
  title: 'Restaurant 1'
  });
//   marker2.addListener('click', function() {
//   infowindow2.open(map, marker2);
// });
//
// var marker3 = new google.maps.Marker({
//   position: myLatLng3,
//   map: map,
//   title: 'Restaurant 2'
//   });
//   marker3.addListener('click', function() {
//   infowindow3.open(map, marker3);
// });

var marker4 = new google.maps.Marker({
  position: myLatLng4,
  map: map,
  title: 'Restaurant 3'
  });
//   marker4.addListener('click', function() {
//   infowindow3.open(map, marker4);
// });

var marker5 = new google.maps.Marker({
  position: myLatLng5,
  map: map,
  title: 'Restaurant 4'
  });
//   marker5.addListener('click', function() {
//   infowindow3.open(map, marker5);
// });

var marker6 = new google.maps.Marker({
  position: myLatLng6,
  map: map,
  title: 'Restaurant 5'
  });
//   marker6.addListener('click', function() {
//   infowindow3.open(map, marker6);
// });

var marker7 = new google.maps.Marker({
  position: myLatLng7,
  map: map,
  title: 'Restaurant 6'
  });
//   marker7.addListener('click', function() {
//   infowindow3.open(map, marker7);
// });


// creates div event
  google.maps.event.addListener(marker, 'click', function (marker, i) {
    if ($('#div1').css('display') == 'block') {
      $('#div1').css('display', 'none');
    } else {
      $('#div1').css('display', 'block');
      $('#div2').hide();
      $('#div3').hide();
      $('#div4').hide();
      $('#div5').hide();
      $('#div6').hide();
      $('#div7').hide();
      $('#div0').hide();
    }
  });

  google.maps.event.addListener(marker2, 'click', function (marker2, i) {
    if ($('#div2').css('display') == 'block') {
      $('#div2').css('display', 'none');
    } else {
      $('#div2').css('display', 'block');
      $('#div1').hide();
      // $('#div3').hide();
      $('#div4').hide();
      $('#div5').hide();
      $('#div6').hide();
      $('#div7').hide();
      $('#div0').hide();
    }
  });

  // google.maps.event.addListener(marker3, 'click', function (marker3, i) {
  //   if ($('#div3').css('display') == 'block') {
  //     $('#div3').css('display', 'none');
  //   } else {
  //     $('#div3').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });

  google.maps.event.addListener(marker4, 'click', function (marker4, i) {
    if ($('#div4').css('display') == 'block') {
      $('#div4').css('display', 'none');
    } else {
      $('#div4').css('display', 'block');
      $('#div1').hide();
      $('#div2').hide();
      // $('#div3').hide();
      $('#div5').hide();
      $('#div6').hide();
      $('#div7').hide();
      $('#div0').hide();
    }
  });

  google.maps.event.addListener(marker5, 'click', function (marker5, i) {
    if ($('#div5').css('display') == 'block') {
      $('#div5').css('display', 'none');
    } else {
      $('#div5').css('display', 'block');
      $('#div1').hide();
      $('#div2').hide();
      // $('#div3').hide();
      $('#div4').hide();
      $('#div6').hide();
      $('#div7').hide();
      $('#div0').hide();
    }
  });

  google.maps.event.addListener(marker6, 'click', function (marker6, i) {
    if ($('#div6').css('display') == 'block') {
      $('#div6').css('display', 'none');
    } else {
      $('#div6').css('display', 'block');
      $('#div1').hide();
      $('#div2').hide();
      // $('#div3').hide();
      $('#div4').hide();
      $('#div5').hide();
      $('#div7').hide();
      $('#div0').hide();
    }
  });

  google.maps.event.addListener(marker7, 'click', function (marker7, i) {
    if ($('#div7').css('display') == 'block') {
      $('#div7').css('display', 'none');
    } else {
      $('#div7').css('display', 'block');
      $('#div1').hide();
      $('#div2').hide();
      // $('#div3').hide();
      $('#div4').hide();
      $('#div5').hide();
      $('#div6').hide();
      $('#div0').hide();
    }
  });

  // map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});


}
