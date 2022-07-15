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
            <div>
                <h1>Restaurants in {city.name}</h1>
                <Map spots={restaurants} city={city} />
                <ul>
                    {
                        restaurants.map(restaurant =>

                            <div key={restaurant.id}>
                                <div><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></div>
                                <div>
                                    <li>{restaurant.cuisines}</li>
                                    <li>{restaurant.price_range}</li>
                                </div>
                            </div>

                        )
                    }
                </ul>
            </div>
        )
    }

}

export default RestaurantIndex;