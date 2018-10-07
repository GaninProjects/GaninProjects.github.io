var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
	
	function geo_success(position) {
	  alert(position.coords.latitude, position.coords.longitude);
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
	
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [position.coords.latitude, position.coords.longitude], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
}