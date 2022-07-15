export default class MarkerManager {
    
    constructor(map) {
        this.map = map;
        this.markers = {};

    }

    updateMarkers(spots) {
        // const spotsObj = {};
        // spots.forEach(spot => spotsObj[spot.id] = spot);

        spots
            // .filter(spot => !this.markers[spot.id])
            .forEach((newSpot) => this.createMarkerFromSpot(newSpot))

    };

    createMarkerFromSpot(spot) {
        const position = {lat: spot.latitude, lng: spot.longtitude};
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id
        });

        this.markers[marker.spotId] = marker;
    }
}