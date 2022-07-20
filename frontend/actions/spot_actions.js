import * as SpotApiUtil from "../util/spots_api_util"

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const CLEAR_SPOTS = "CLEAR_SPOTS";


const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots: spots
})

const receiveSpot = payload => ({
    type: RECEIVE_SPOT,
    payload
});

export const clearSpots = () => ({
    type: CLEAR_SPOTS
});

export const fetchSpots = (cityId) => dispatch => (
    SpotApiUtil.fetchSpots(cityId)
        .then(spots => dispatch(receiveSpots(spots)))
)

export const fetchSpot = spotId => dispatch => (
    SpotApiUtil.fetchSpot(spotId)
        .then(spot => dispatch(receiveSpot(spot)))
);