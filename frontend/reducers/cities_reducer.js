import { RECEIVE_CITIES, RECEIVE_CITY } from "../actions/city_actions";

const citiesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CITIES:
            return Object.assign({}, state, action.cities)
        case RECEIVE_CITY:
            return Object.assign({}, state, { [action.city.id]: action.city })
        default:
            return state;
    }
};

export default citiesReducer;