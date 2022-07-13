import { connect } from "react-redux";
import { fetchCities, fetchCity } from "../../actions/city_actions";
import City from "./city";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    city: state.entities.cities[ownProps.match.params.cityId]
    // cities: state.entities.cities
})

const mDTP = (dispatch) => ({
    // fetchCities: () => dispatch(fetchCities()),
    fetchCity: (cityId) => dispatch(fetchCity(cityId))
});

export default connect(mSTP, mDTP)(City)