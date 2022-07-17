import { connect } from "react-redux";
import { fetchHotel } from "../../actions/hotel_actions";
import Hotel from "./hotel";

const mSTP = (state, ownProps) => ({
    hotel: state.entities.hotels[ownProps.match.params.hotelId]
})

const mDTP = (dispatch) => ({
    fetchHotel: (hotelId) => dispatch(fetchHotel(hotelId))
});

export default connect(mSTP, mDTP)(Hotel)