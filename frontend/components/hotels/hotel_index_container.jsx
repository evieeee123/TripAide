import { connect } from 'react-redux';
import { fetchHotels, fetchHotel, clearHotels } from '../../actions/hotel_actions';
import { clearRestaurants } from '../../actions/restaurant_actions';
import { clearSpots } from '../../actions/spot_actions';
import { fetchCity } from '../../actions/city_actions';
import HotelIndex from './hotel_index';



const mSTP = (state, ownProps) => {
    return {
        hotels: Object.values(state.entities.hotels),
        city: state.entities.cities[ownProps.match.params.cityId],
    }
}

const mDTP = dispatch => ({
    fetchHotels: (cityId) => dispatch(fetchHotels(cityId)),
    fetchHotel: (hotelId) => dispatch(fetchHotel(hotelId)),
    clearHotels: () => dispatch(clearHotels()),
    clearRestaurants: () => dispatch(clearRestaurants()),
    clearSpots: () => dispatch(clearSpots()),
    fetchCity: (cityId) => dispatch(fetchCity(cityId))
})

export default connect(mSTP, mDTP)(HotelIndex)