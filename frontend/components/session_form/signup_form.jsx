import { Link } from "react-router-dom";
import React from "react";

class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearSessionErrors()
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() =>
        // redirect to '/' or dispatch for errors
        this.props.history.push("/"),
        (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        return (
            <div className='background-image-session'>
                <div className="whole-form">
                    <div className="form-header">
                        <img src={window.logo} alt="logo" className="form-logo" />
                        <div>Create a new user</div>
                    </div>

                    <form className="session-form">
                        <div className="form-error">{this.renderErrors()}</div>
                        <input 
                            className="signup-input" 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username" 
                        />
                        <input 
                            className="signup-input"
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address" 
                        />
                        <input
                            className="signup-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />

                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                        
                        <div className='form-footer'>
                            <span>
                                Already have an account? 
                                <Link to="/login" onClick={this.props.clearSessionErrors} className="session-link"> Log in </Link>
                            </span
                            >
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default SignupForm;