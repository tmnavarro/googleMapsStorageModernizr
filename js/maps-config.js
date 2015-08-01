var map;
var marker;
var myLatlng;

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 9,
    center: {lat: -23.5854726, lng: -46.67721059999997}
  });

}

function success(geoPosition){
	var lat = geoPosition.coords.latitude;
	var lng = geoPosition.coords.longitude;
	var mensagem = 'Você esta aqui!';

	myLatlng = new google.maps.LatLng(lat, lng);


	createMarker(myLatlng, mensagem);
}

function failed(error){
	myLatlng = new google.maps.LatLng(-23.5854726,-46.67721059999997);
	var mensagem = 'Você não foi encontrado.';

	createMarker(myLatlng, mensagem);
}

function createMarker(myLatlng, mensagem){
	var image = 'http://localhost/drcgeo/img/marker.png';
	
	marker = new google.maps.Marker({
		position:  myLatlng,
		map: map,
		title: mensagem,
		optimized: false,
		zIndex: 5,
		ico: image
	});
}


$(document).ready(function(){
	google.maps.event.addDomListener(window, 'load', initialize);

	navigator.geolocation.getCurrentPosition(success, failed);
});
