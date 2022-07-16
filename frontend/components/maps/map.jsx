import React from "react";
import MarkerManager from "../../util/marker_manager";


const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});


// set the map to show SF

class Map extends React.Component{
    
    constructor(props){
        super(props)
        
        this.mapOptions = {
            center: {
                lat: this.props.city.latitude,
                lng: this.props.city.longtitude
            }, // San Francisco coords
            zoom: 12
        };
    }

    componentDidMount() {
        const map = this.refs.map;
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(map, this.mapOptions);
        
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.spots);
        // console.log(this.MarkerManager.markers)

    }
    
    
    componentWillUnmount(){
        Object.values(this.MarkerManager.markers).forEach(marker => marker.setMap(null));
        this.props.clearSpots();
        this.props.clearRestaurants();
        // console.log(this.props)
    }
        
    render(){
        return (
            <div>
            {/* <div ref={ map => this.mapNode = map }></div> // this ref gives us access to the map dom node */}
            <div id='map-container' ref='map'>
                map
            </div>
        </div>
        )
    }
}

export default Map;