import * as RestaurantApiUtil from "../util/restaurants_api_util"

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
});

export const fetchRestaurants = (cityId) => dispatch => (
    RestaurantApiUtil.fetchRestaurants(cityId)
        .then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

export const fetchRestaurant = restaurantId => dispatch => (
    RestaurantApiUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);