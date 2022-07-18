import React from "react";
import { Link } from "react-router-dom";


class ProfileDropdown extends React.Component {
    constructor(props){
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        const {currentUser} = this.props;
        return (
            <div className="nav-login-state">

                <div className='review-button'>
                    <span className="material-symbols-outlined">edit</span><p> Review</p>
                </div>

                <div className="dropdown">
                    <img src={window.user_icon} alt="user_icon" />
                    <div className="dropdown-logout">
                        <p>Hi, {currentUser.username}!</p>
                        <Link to="/" onClick={this.props.handleLogout} className="logout-button">Log out</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDropdown;