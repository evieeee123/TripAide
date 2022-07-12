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
        return (
            <div className="dropdown">
                <span>User img</span>
                <div className="dropdown-logout">
                    <Link to="/" onClick={this.props.handleLogout}>Log out</Link>
                </div>
            </div>
        )
    }
}

export default ProfileDropdown;