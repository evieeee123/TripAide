import { connect } from "react-redux";
import { fetchCities, fetchCity } from "../../actions/city_actions";
import City from "./city";
import { fetchSpots } from "../../actions/spot_actions";
import { fetchHotels } from "../../actions/hotel_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    city: state.entities.cities[ownProps.match.params.cityId],
    // cities: state.entities.cities
    spots: Object.values(state.entities.spots),
    hotels: Object.values(state.entities.hotels),
    restaurants: Object.values(state.entities.restaurants)
})

const mDTP = (dispatch) => ({
    // fetchCities: () => dispatch(fetchCities()),
    fetchCity: (cityId) => dispatch(fetchCity(cityId)),
    fetchSpots: (cityId) => dispatch(fetchSpots(cityId)),
    fetchHotels: (cityId) => dispatch(fetchHotels(cityId)),
    fetchRestaurants: (cityId) => dispatch(fetchRestaurants(cityId))
});

export default connect(mSTP, mDTP)(City)