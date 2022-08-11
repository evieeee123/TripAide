import React from "react";
import { Link } from "react-router-dom";
import Map from "../maps/map";
import Rating from "../rating/rating";


class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurants(this.props.match.params.cityId)
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
                                    <div><img src={restaurant.image_url} alt="trip" className="spot-index-img" /></div>
                                    <div className="spot-index-info">
                                        <div className="spot-index-name"><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></div>
                                        <div>
                                            <li className="spot-index-rating"><Rating rate={restaurant.rating} /></li>
                                            <li className="res-index-type"><span>{restaurant.cuisines}</span> | <span>{restaurant.price_range}</span></li>
                                            {/* <li className="spot-index-type">{restaurant.price_range}</li> */}
                                        </div>

                                        {
                                            (restaurant.review[0]) ?
                                                <div className="index-review-1" >
                                                    <div className="line" ></div>
                                                    <Link to={`/restaurants/${restaurant.id}`} className="index-review-text"> "{this.truncate(restaurant.review[0], 12)} ..." </Link>
                                                </div> : ""
                                        }
                                        {
                                            (restaurant.review[1]) ?
                                                <div><Link to={`/restaurants/${restaurant.id}`} className="index-review-text" > "{this.truncate(restaurant.review[1], 12)} ..." </Link> </div> : ""
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

export default RestaurantIndex;