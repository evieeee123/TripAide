import { connect } from "react-redux";
import { fetchSpots, fetchSpot, clearSpots } from "../../actions/spot_actions";
import Spot from "./spot";
import { fetchReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    spot: state.entities.spots[ownProps.match.params.spotId],
    spots: state.entities.spots,
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],


})

const mDTP = (dispatch) => ({
    // fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    clearSpots: () => dispatch(clearSpots()),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
});

export default connect(mSTP, mDTP)(Spot)