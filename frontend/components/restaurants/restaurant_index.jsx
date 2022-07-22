import React from "react";
import { Link } from "react-router-dom";
import Map from "../maps/map";

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants(this.props.match.params.cityId)
        this.props.fetchCity(this.props.match.params.cityId)
    }

    render() {
        const { restaurants, city } = this.props;
        if (restaurants.length === 0 || !city) return null;
        return (
            <div className="spot-index-page">
                <div className="spots-index-title">Restaurants in {city.name}</div>
                <div className="spot-index-body">
                    <div className="map">
                        <Map spots={restaurants} city={city} clearRestaurants={this.props.clearRestaurants} clearSpots={this.props.clearSpots} clearHotels={this.props.clearHotels} />
                    </div>

                    <ul>
                        {
                            restaurants.map(restaurant =>

                                <div key={restaurant.id} className="single-spot">
                                    <div><img src={window.trip} alt="trip" className="spot-index-img" /></div>
                                    <div className="spot-index-info">
                                        <div className="spot-index-name"><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></div>
                                        <div>
                                            <li>{restaurant.cuisines}</li>
                                            <li>{restaurant.price_range}</li>
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

export default RestaurantIndex;