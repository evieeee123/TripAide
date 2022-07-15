import { connect } from 'react-redux';
import { fetchSpots, fetchSpot } from '../../actions/spot_actions';
import { fetchCity } from '../../actions/city_actions';
import SpotIndex from './spot_index';


const mSTP = (state, ownProps) => {
    return { 
        spots: Object.values(state.entities.spots),
        city: state.entities.cities[ownProps.match.params.cityId]
    }
}

const mDTP = dispatch => ({
    fetchSpots: (cityId) => dispatch(fetchSpots(cityId)),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    fetchCity: (cityId) => dispatch(fetchCity(cityId))
})

export default connect(mSTP, mDTP)(SpotIndex)