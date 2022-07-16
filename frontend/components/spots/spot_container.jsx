import { connect } from "react-redux";
import { fetchSpots, fetchSpot, clearSpots } from "../../actions/spot_actions";
import Spot from "./spot";

const mSTP = (state, ownProps) => ({
    // cityId depend on how to name the routes path in app.jsx
    spot: state.entities.spots[ownProps.match.params.spotId],
    spots: state.entities.spots
})

const mDTP = (dispatch) => ({
    // fetchSpots: () => dispatch(fetchSpots()),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    clearSpots: () => dispatch(clearSpots())
});

export default connect(mSTP, mDTP)(Spot)