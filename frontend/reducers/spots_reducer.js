import { RECEIVE_SPOTS, RECEIVE_SPOT, CLEAR_SPOTS } from "../actions/spot_actions";

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_SPOTS:
            return action.spots;
        case RECEIVE_SPOT:
            return Object.assign({}, state, { [action.payload.spot.id]: action.payload.spot });
        case CLEAR_SPOTS:
            return {};
        default:
            return state;
    }
};

export default spotsReducer;