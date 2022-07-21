import { connect } from "react-redux";
import { fetchHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel";
import { fetchReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
    hotel: state.entities.hotels[ownProps.match.params.hotelId],
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],
    places: "hotels"
})

const mDTP = (dispatch) => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    fetchHotel: (hotelId) => dispatch(fetchHotel(hotelId)),
});

export default connect(mSTP, mDTP)(Hotel)