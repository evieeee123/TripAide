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
            <div>
                <h1>Hotels in {city.name}</h1>
                <Map spots={hotels} city={city} clearHotels={this.props.clearHotels} clearRestaurants={this.props.clearRestaurants} clearSpots={this.props.clearSpots} />
                <ul>
                    {
                        hotels.map(hotel =>

                            <div key={hotel.id}>
                                <div><Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link></div>
                                <div>
                                    <li>{hotel.phonenum}</li>
                                </div>
                            </div>

                        )
                    }
                </ul>
            </div>
        )
    }

}

export default HotelIndex;