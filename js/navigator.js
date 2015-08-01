/*(function(){

	function success(geoPosition){
		var lat = geoPosition.coords.latitude;
		var lng = geoPosition.coords.longitude;
		var precisao = geoPosition.coords.accuracy;
		var speed = geoPosition.coords.speed;

		if(speed <= 0){
			var html = '<h1>Você esta na latitude:'+lat+'</br>E na longitude:'+lng+'</br>Com a precisão de: '+precisao+'% de certeza</br>Você esta parado.</h1>';
			//$('.content').html(html);
			document.getElementById("coordenadas").innerHTML  = html; 

			console.log('Você esta na latitude:'+lat+'\nE na longitude:'+lng+'\nCom a precisão de: '+precisao+'% de certeza\nVocê esta parado.');
		}else{
			console.log('Você esta na latitude:'+lat+'\nE na longitude:'+lng+'\nCom a precisão de: '+precisao+'% de certeza\n Volocidade:'+speed);
		}

	

		
	}

	function failed(positionError){
		console.log(positionError.message);
	}

	navigator.geolocation.getCurrentPosition(success, failed);

})();*/ 

window.onload = function(){

	var map = new google.maps.Map(document.querySelector('.map-container'), {
		zoom: 8,
		center: : {lat: -34.397, lng: 150.644},
		
  	});

};

