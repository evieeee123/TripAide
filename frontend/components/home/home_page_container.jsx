import { connect } from 'react-redux';
import { fetchCity, fetchCities } from '../../actions/city_actions';
import HomePage from './home_page';


const mSTP = (state, ownProps) => {
    return {
        cities: Object.values(state.entities.cities),
    }
}

const mDTP = dispatch => ({
    fetchCities: () => dispatch(fetchCities())
})

export default connect(mSTP, mDTP)(HomePage)