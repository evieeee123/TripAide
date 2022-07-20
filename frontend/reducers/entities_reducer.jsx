import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import citiesReducer from './cities_reducer';
import spotsReducer from './spots_reducer';
import restaurantsReducer from './restaurants_reducer';
import hotelsReducer from './hotels_reducer';
import reviewReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cities: citiesReducer,
    spots: spotsReducer,
    restaurants: restaurantsReducer,
    hotels: hotelsReducer,
    reviews: reviewReducer
});

export default entitiesReducer;
