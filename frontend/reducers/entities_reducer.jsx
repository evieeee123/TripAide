import { combineReducers } from 'redux';

// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import usersReducer from './users_reducer';
import citiesReducer from './cities_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    cities: citiesReducer
    // benches,
    // reviews,
});

export default entitiesReducer;
