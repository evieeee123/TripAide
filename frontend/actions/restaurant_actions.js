import * as RestaurantApiUtil from "../util/restaurants_api_util"

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const CLEAR_RESTAURANTS = "CLEAR_RESTAURANTS";


const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

const receiveRestaurant = payloadRestaurant => ({
    type: RECEIVE_RESTAURANT,
    payloadRestaurant
});

export const clearRestaurants = () => ({
    type: CLEAR_RESTAURANTS
});

export const fetchRestaurants = (cityId) => dispatch => (
    RestaurantApiUtil.fetchRestaurants(cityId)
        .then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

export const fetchRestaurant = restaurantId => dispatch => (
    RestaurantApiUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);