import React from 'react';
import { Link } from 'react-router-dom';


// const Greeting = ({ currentUser, logout }) => {
//     const sessionLinks = () => (
//         <nav className="login-signup">
//             <Link to="/login">Login</Link>
//             &nbsp;or&nbsp;
//             <Link to="/signup">Sign up!</Link>
//         </nav>
//     );
//     const personalGreeting = () => (
//         <hgroup className="header-group">
//             <h2 className="header-name">Hi, {currentUser.username}!</h2>
//             <button className="header-button" onClick={logout}>Log Out</button>
//         </hgroup>
//     );

//     return currentUser ? personalGreeting() : sessionLinks();
// };

class Greeting extends React.Component{
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return navBar = this.props.currentUser ? (
                <div className='navbar-logout'>
                        <ProfileDropdown handleLogout={this.handleLogout} />
                </div>
        ) : (
                <div>
                    <Link to='/signup' className='signup-button' onClick={this.props.clearSessionErrors}>Sign Up</Link>
                    <Link to='/login' className='login-button' onClick={this.props.clearSessionErrors}>Login</Link>
                </div>
           )
    }

}


export default Greeting;