import { receiveReview, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_SPOT } from "../actions/spot_actions";

const reviewReducer = (state = {}, action) => {
    Object.freeze(state);
    // console.log("action", action.reviewId)
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
            return action.payload.reviews
        default:
            return state;
    }
}

export default reviewReducer;