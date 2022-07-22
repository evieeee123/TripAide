import React from "react";
import { Link } from "react-router-dom";
import Map from "../maps/map";

class HotelIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchHotels(this.props.match.params.cityId)
        this.props.fetchCity(this.props.match.params.cityId)
    }

    render() {
        const { hotels, city } = this.props;
        if (hotels.length === 0 || !city) return null;
        return (
            <div className="spot-index-page">
                <div className="spots-index-title">Hotels in {city.name}</div>
                    <div className="spot-index-body">
                    <div className="map">
                            <Map spots={hotels} city={city} clearHotels={this.props.clearHotels} clearRestaurants={this.props.clearRestaurants} clearSpots={this.props.clearSpots} />
                        </div>
                    <ul>
                        {
                            hotels.map(hotel =>

                                <div key={hotel.id} className="single-spot">
                                    <div><img src={window.trip} alt="trip" className="spot-index-img" /></div>
                                    <div className="spot-index-info">
                                        <div className="spot-index-name"><Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link></div>
                                        <div>
                                            <li>{hotel.phonenum}</li>
                                        </div>
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

export default HotelIndex;