import { connect } from 'react-redux';
import { fetchRestaurants, fetchRestaurant, clearRestaurants } from '../../actions/restaurant_actions';
import { clearSpots } from '../../actions/spot_actions';
import { fetchCity } from '../../actions/city_actions';
import ReataurantIndex from './restaurant_index';


const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        city: state.entities.cities[ownProps.match.params.cityId]
    }
}

const mDTP = dispatch => ({
    fetchRestaurants: (cityId) => dispatch(fetchRestaurants(cityId)),
    fetchRestaurant: (restaurantId) => dispatch(fetchRestaurant(restaurantId)),
    clearRestaurants: () => dispatch(clearRestaurants()),
    clearSpots: () => dispatch(clearSpots()),
    fetchCity: (cityId) => dispatch(fetchCity(cityId))
})

export default connect(mSTP, mDTP)(ReataurantIndex)