import { combineReducers } from 'redux';

// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer
    // benches,
    // reviews,
});

export default entitiesReducer;
