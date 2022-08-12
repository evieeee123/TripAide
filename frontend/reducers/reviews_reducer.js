import { receiveReview, RECEIVE_REVIEW, REMOVE_REVIEW, CLEAR_REVIEWS } from "../actions/review_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";
import { RECEIVE_SPOT } from "../actions/spot_actions";
import { RECEIVE_HOTEL } from "../actions/hotel_actions";

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState;
        case REMOVE_REVIEW:
            // debugger
            delete nextState[action.reviewId]
            return nextState;
        case RECEIVE_SPOT:
            return action.payload.reviews ? action.payload.reviews : {};
        case RECEIVE_RESTAURANT:
            return action.payloadRestaurant.reviews ? action.payloadRestaurant.reviews : {};
        case RECEIVE_HOTEL:
            return action.payloadHotel.reviews ? action.payloadHotel.reviews : {};
        case CLEAR_REVIEWS:
            return {};
        default:
            return state;
    }
}

export default reviewReducer;