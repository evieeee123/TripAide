import React from "react";
import ShowMoreText from "react-show-more-text";
import { clearReviews } from "../../actions/review_actions";
import Review from "../reviews/review";
import Rating from "../rating/rating";
import { MdLocationOn } from "react-icons/md";
import { TbPhone } from "react-icons/tb";


class Restaurant extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
        window.scrollTo(0, 0)
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
                <div className="res-info-nav">
                    <div className="spot-show-title">{restaurant.name}</div>
                    <div className="res-show-rating">
                        <Rating rate={restaurant.rating} /> 
                        <span>{reviews.length} reviews</span>
                        <div className="split"> | </div>
                        <div className="res-show-price">{restaurant.price_range}, {restaurant.cuisines}</div>
                    </div>  

                        <ul>
                            <li className="addr-phone">
                                <span className="res-show-addr"><MdLocationOn/>{restaurant.res_address} </span>
                                <span className="res-show-phone"><TbPhone className="phone-icon"/> {restaurant.phonenum}</span>
                            </li>
                        </ul>
                </div>

                <div className="res-show-main">
                    <div className="img-info-part">
                        <img src={restaurant.image_url} alt="trip" className="res-pic"/>
                        <div className="detial-info">
                            <h2>Details</h2>
                            <div className="res-info-box">
                                <div className="res-about">
                                    <h4>ABOUT</h4>
                                    <p>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={9}
                                            more="Show more"
                                            less="...Show less"
                                            anchorClass="oooeeer"
                                            className="show-more-less"
                                            onClick={this.executeOnClick}
                                            expanded={false}
                                            width={250}
                                        >
                                        {restaurant.description}
                                    </ShowMoreText>
                                    </p>
                                </div>
                                <div className="res-box-right">
                                    <div>
                                        <h4>SPECIAL DIETS</h4>
                                        <p>{restaurant.special_diets}</p>
                                    </div>

                                    <div>
                                        <h4>MEALS</h4>
                                        <p>{restaurant.meals}</p>
                                    </div>

                                    <div>
                                        <h4>CUISINES</h4>
                                        <p>{restaurant.cuisines}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="res-review">
                        <Review reviews={reviews} place={restaurant} places={places} currentUser={currentUser} clearReviews={clearReviews} />
                    </div>
                
                </div>

            </div>
        )
    }

}

export default Restaurant;