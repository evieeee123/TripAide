import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import Restaurant from "./restaurant";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    // spots: state.entities.spots
})

const mDTP = (dispatch) => ({
    // fetchSpots: () => dispatch(fetchSpots()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(Restaurant)