import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, CLEAR_RESTAURANTS } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, { [action.payloadRestaurant.restaurant.id]: action.payloadRestaurant.restaurant })
        case CLEAR_RESTAURANTS:
            return {};
        default:
            return state;
    }
};

export default restaurantsReducer;