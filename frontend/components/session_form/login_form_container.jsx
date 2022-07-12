import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearSessionErrors, login } from '../../actions/session_actions';
// import SessionForm from './session_form';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);