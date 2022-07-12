import { connect } from "react-redux";
import {logout} from "../../actions/session_actions"
import Greeting from './greeting';
import { clearSessionErrors } from "../../actions/session_actions";

// const mapStateToProps = state => {
//     return {
//         currentUser: state.session.id
//     };
// };

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),

    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
