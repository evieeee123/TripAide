import { RECEIVE_HOTELS, RECEIVE_HOTEL, CLEAR_HOTELS } from "../actions/hotel_actions";

const hotelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_HOTELS:
            return action.hotels;
        case RECEIVE_HOTEL:
            return Object.assign({}, state, { [action.hotel.id]: action.hotel })
        case CLEAR_HOTELS:
            return {};
        default:
            return state;
    }
};

export default hotelsReducer;