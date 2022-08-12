import React from "react";
import ReactDOM from "react-dom";
// import {login, signup, logout} from "./util/session_api_util"
import {fetchCity, fetchCities} from "./util/cities_api_util"
import { fetchSpot, fetchSpots } from "./util/spots_api_util"
import { fetchRestaurants , fetchRestaurant } from "./util/restaurants_api_util"
import { fetchReview } from "./util/reviews_api_util";


import configureStore from './store/store';
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    window.fetchCity = fetchCity;
    window.fetchCities = fetchCities;
    window.fetchSpot = fetchSpot;
    window.fetchSpots = fetchSpots;
    window.fetchRestaurant = fetchRestaurant;
    window.fetchRestaurants = fetchRestaurants;
    window.fetchReview = fetchReview;

    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<h1>it working</h1>, root);
});