import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearReviewErrors, createReview } from "../../actions/review_actions";
import { fetchSpot, receiveSpot } from "../../actions/spot_actions";
import { fetchRestaurant, receiveRestaurant } from "../../actions/restaurant_actions";
import { fetchHotel, receiveHotel } from "../../actions/hotel_actions";
import CreateReviewForm from './create_review_form'

const mSTP = (state, ownProps) => {
    // debugger
    let place;
    let placeType;
    let placeId;
    if (state.entities.spots !== {}){
        place = "spot";
        placeType = "spots";
        placeId = "spotId";
    } else if (state.entities.hotels !== {}) {
        place = "hotel";
        placeType = "hotels";
        placeId = "hotelId";
    } else if (state.entities.restaurants !== {}) {
        place = "restaurant";
        placeType = "restaurants";
        placeId = "restaurantId";
    }
    debugger
    
    return {
        currentUser: state.entities.users[state.session.id],
        // spot: state.entities.spots[ownProps.match.params.spotId],

        [place]: state.entities[placeType][ownProps.match.params[placeId]],

        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        // hotel: state.entities.hotels[ownProps.match.params.hotelId],
        reviews: Object.values(state.entities.reviews),
        errors: state.errors.review,
        user_id: state.session.id,
        place: place,
        placeType: placeType,
        placeId: placeId
    }
}

const mDTP = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
        fetchHotel: (hotelId) => dispatch(fetchHotel(hotelId)),
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        // fetchRestaurants: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        // fetchHotels: (hotelId) => dispatch(fetchHotel(hotelId)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    }
};

export default connect(mSTP, mDTP)(CreateReviewForm)