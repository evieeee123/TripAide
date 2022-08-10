import React from "react";
import { Link } from "react-router-dom";
import Map from "../maps/map";
import Rating from "../rating/rating";


class SpotIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpots(this.props.match.params.cityId)
        this.props.fetchCity(this.props.match.params.cityId)
        window.scrollTo(0, 0)
    }

    truncate(str, num) {
        // debugger
        if (str !== undefined) {
            return str.split(" ").splice(0, num).join(" ");
        } else {
            return ""
        }
    }

    render(){
        const {spots, city} = this.props;
        if(spots.length === 0 || !city) return null;
        return (
            <div className="spot-index-page">
                <div className="spots-index-title">Attractions in {city.name}</div>
                <div className="spot-index-body">
                    <div className="map">
                        <Map spots={spots} city={city} clearSpots={this.props.clearSpots} clearRestaurants={this.props.clearRestaurants} clearHotels={this.props.clearHotels} />
                    </div>

                    <ul>
                        {
                            spots.map(spot => 

                                <div key={spot.id} className="single-spot">
                                    <div><img src={spot.image_url} alt="trip" className="spot-index-img"/></div>
                                    <div className="spot-index-info">
                                        <div className="spot-index-name"><Link to={`/spots/${spot.id}`}>{spot.name}</Link></div>
                                        <div>{ spot.spot_type }</div>
                                        <div><Rating rate={spot.rating} /></div>
                                    {
                                        (spot.review[0]) ?
                                            <div><Link to={`/spots/${spot.id}`}> "{this.truncate(spot.review[0], 12)} ..." </Link></div> : ""
                                    }
                                    {
                                        (spot.review[1]) ?
                                            <div><Link to={`/spots/${spot.id}`}> "{this.truncate(spot.review[1], 12)} ..." </Link> </div> : ""
                                    }
                                    </div>


                                </div> 

                            )
                        }
                    </ul>

                </div>
            </div>
        )
    }

}

export default SpotIndex;