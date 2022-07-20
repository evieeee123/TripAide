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
    return {
        currentUser: state.entities.users[state.session.id],
        spot: state.entities.spots[ownProps.match.params.spotId],
        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        // hotel: state.entities.hotels[ownProps.match.params.hotelId],
        reviews: Object.values(state.entities.reviews),
        errors: state.errors.review,
        user_id: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
        // fetchRestaurants: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        // fetchHotels: (hotelId) => dispatch(fetchHotel(hotelId)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    }
};

export default connect(mSTP, mDTP)(CreateReviewForm)