import React from "react";
import { Link } from "react-router-dom";
import Map from "../maps/map";

class SpotIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpots(this.props.match.params.cityId)
        this.props.fetchCity(this.props.match.params.cityId)
    }

    render(){
        const {spots, city} = this.props;
        if(spots.length === 0 || !city) return null;
        return (
            <div>
                <h1>Attractions in {city.name}</h1>
                <Map spots={spots} city={city} clearSpots={this.props.clearSpots} />
                <ul>
                    {
                        spots.map(spot => 
                            
                            <div key={spot.id}>
                                <div><Link to={`/spots/${spot.id}`}>{spot.name}</Link></div>
                                <div>{ spot.spot_type }</div>
                            </div> 
                            
                        )
                    }
                </ul>
            </div>
        )
    }

}

export default SpotIndex