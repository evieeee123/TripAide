import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from './profile_dropdown';


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
        const navBar = this.props.currentUser ? (
                <div className='navbar-logout'>
                        <ProfileDropdown handleLogout={this.handleLogout} currentUser={this.props.currentUser} />
                </div>
        ) : (
                <div className='nav-session-button'>
                    <div className='review-button'><span class="material-symbols-outlined">
                        edit 
                    </span><p> Review</p></div>
                    <button className='nav-session-button-single'><Link to='/signup' >Sign Up</Link></button>
                    <button className='nav-session-button-single'><Link to='/login'>Login</Link></button>
                </div>
           )
        return navBar
    }

}

export default Greeting;