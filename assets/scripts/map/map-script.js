function initMap() {
	var coordinates = {lat: -7.9314112, lng: 112.6374214};
	var mapContainer = document.querySelector('#map');
	var map = new google.maps.Map(mapContainer, {
		center: coordinates,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false
	});

	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: "assets/img/contact-maps-marker.png"
	});

	google.maps.event.addDomListener(window, "resize", function () {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	})
}