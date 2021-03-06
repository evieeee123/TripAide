import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { clearReviewErrors, updateReview, fetchReview } from "../../actions/review_actions";
import { fetchSpot, receiveSpot } from "../../actions/spot_actions";
import { fetchRestaurant, receiveRestaurant } from "../../actions/restaurant_actions";
import { fetchHotel, receiveHotel } from "../../actions/hotel_actions";
import EditReviewForm from './edit_review_form'

const mSTP = (state, ownProps) => {
    let place;
    let placeType = ownProps.match.params.placeType;
    let placeId;
    if (placeType === "spots") {
        place = "spot";
        placeId = "spotId";
    } else if (placeType === "hotels") {
        place = "hotel";
        placeId = "hotelId";
    } else if (placeType === "restaurants") {
        place = "restaurant";
        placeId = "restaurantId";
    }
// debugger
    return {
        currentUser: state.entities.users[state.session.id],
        // spot: state.entities.spots[ownProps.match.params.spotId],
        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        // hotel: state.entities.hotels[ownProps.match.params.hotelId],
        [place]: state.entities[placeType][ownProps.match.params[placeId]],
        review: state.entities.reviews[ownProps.match.params.reviewId],

        errors: state.errors.review,
        user_id: state.session.id,

        place: place,
        placeType: placeType,
        placeId: ownProps.match.params.placeId
    }
}

const mDTP = (dispatch) => {
    return {
        updateReview: (review) => dispatch(updateReview(review)),
        fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
        fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
        fetchHotel: (hotelId) => dispatch(fetchHotel(hotelId)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
    }
};

export default connect(mSTP, mDTP)(EditReviewForm)