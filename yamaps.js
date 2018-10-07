var myMap;

ymaps.ready(init);

function init () {
//*****************************************СОЗДАНИЕ*****************************************************//		
    myMap = new ymaps.Map('map', {
        center: [53.508599, 49.419078],
        zoom: 10,
		controls: []
    });
	myCar = new ymaps.Placemark([53.508599, 49.419078]); 
	var actualProvider = new ymaps.traffic.provider.Actual({}, { infoLayerShown: true });
	actualProvider.setMap(myMap);
//*****************************************СОЗДАНИЕ*****************************************************//		
//*****************************************ГЕОПОЗИЦИЯ*****************************************************//	
	function geo_success(position) {
		myMap.geoObjects.remove(myCar);
        myCar = new ymaps.Placemark([position.coords.latitude, position.coords.longitude], {
            balloonContent: 'Тут должна быть машинка'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'ff0000'
        });	
		myMap.geoObjects.add(myCar);	
		//myMap.setCenter([position.coords.latitude, position.coords.longitude]);		
	}

	function geo_error() {
	  alert("Sorry, no position available.");
	}

	var geo_options = {
	  enableHighAccuracy: true, 
	  maximumAge        : 30000, 
	  timeout           : 27000
	};
	var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);	
//*****************************************ГЕОПОЗИЦИЯ*****************************************************//		
}