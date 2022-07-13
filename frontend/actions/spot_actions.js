import * as SpotApiUtil from "../util/spots_api_util"

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveSpots = spots => ({
    typs: RECEIVE_SPOTS,
    spots
})

const receiveSpot = spot => ({
    type: RECEIVE_SPOT,
    spot
});

export const fetchSpots = () => dispatch => (
    SpotApiUtil.fetchSpots()
        .then(spots => dispatch(receiveSpots(spots)))
)

export const fetchspot = spotId => dispatch => (
    SpotApiUtil.fetchSpot(spotId)
        .then(spot => dispatch(receiveSpot(spot)))
);