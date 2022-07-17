import { combineReducers } from 'redux';

// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import usersReducer from './users_reducer';
import citiesReducer from './cities_reducer';
import spotsReducer from './spots_reducer';
import restaurantsReducer from './restaurants_reducer';
import hotelsReducer from './hotels_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cities: citiesReducer,
    spots: spotsReducer,
    restaurants: restaurantsReducer,
    hotels: hotelsReducer
    // benches,
    // reviews,
});

export default entitiesReducer;
