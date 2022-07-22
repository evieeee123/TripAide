import React from "react";
import { clearReviews } from "../../actions/review_actions";
import Review from "../reviews/review";

class Restaurant extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    componentWillUnmount(){
        this.props.clearReviews()
    }

    render(){
        const {restaurant, reviews, currentUser, places, clearReviews} = this.props;
        if (!restaurant) return null;
        // if (reviews.length === 0) return null;

        return (
            <div className="restaurant-show-page">

                <div className="spot-show-title">{restaurant.name}</div>
                <div>
                    <ul>
                        <li>{restaurant.price_range} {restaurant.cuisines}</li>
                        <li>{restaurant.res_address} {restaurant.phonenum}</li>
                    </ul>

                    <div>
                        <h2>Details</h2>
                        <div>
                            <p>ABOUT</p>
                            <p>{restaurant.description}</p>
                        </div>
                        <div>
                            <p>SPECIAL DIETS</p>
                            <p>{restaurant.special_diets}</p>
                        </div>
                        <div>
                            <p>MEALS</p>
                            <p>{restaurant.meals}</p>
                        </div>
                        <div>
                            <p>CUISINES</p>
                            <p>{restaurant.cuisines}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Review reviews={reviews} place={restaurant} places={places} currentUser={currentUser} clearReviews={clearReviews} />
                </div>

            </div>
        )
    }

}

export default Restaurant;