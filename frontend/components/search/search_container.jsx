import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "./search"
import { fetchSpots } from "../../actions/spot_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import { fetchHotels } from "../../actions/hotel_actions";
import { fetchCities } from "../../actions/city_actions";


const mSTP = state => ({
    spots: Object.values(state.entities.spots),
    restaurants: Object.values(state.entities.restaurants),
    hotels: Object.values(state.entities.hotels),
    cities: Object.values(state.entities.cities),
})

const mDTP = dispatch => ({
    fetchSpots: (cityId) => dispatch(fetchSpots(cityId)),
    fetchRestaurants: (cityId) => dispatch(fetchRestaurants(cityId)),
    fetchHotels: (cityId) => dispatch(fetchHotels(cityId)),
    
    fetchCities: () => dispatch(fetchCities()),
})

export default withRouter(connect(mSTP, mDTP)(Search))