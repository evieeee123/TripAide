import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import Restaurant from "./restaurant";
import { fetchReview } from "../../actions/review_actions";
import { clearReviews } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
    places: "restaurants"
    // spots: state.entities.spots
})

const mDTP = (dispatch) => ({
    // fetchSpots: () => dispatch(fetchSpots()),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    clearReviews: () => dispatch(clearReviews())
});

export default connect(mSTP, mDTP)(Restaurant)