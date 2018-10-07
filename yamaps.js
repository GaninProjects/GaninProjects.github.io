var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	
    myMap = new ymaps.Map('map', {
        center: [53.508599, 49.419078],
        zoom: 10
    }, {
        //searchControlProvider: 'yandex#search'
    });
	
	function geo_success(position) {
		var myCar = null;
		//myCar.removeAll();
        myCar = new ymaps.Placemark([position.coords.latitude, position.coords.longitude], {
            balloonContent: 'Тут должна быть машинка'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        });	
		myMap.geoObjects.add(myCar);		
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
}