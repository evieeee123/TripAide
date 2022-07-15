import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount(){
        this.props.clearSessionErrors()
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user)
            .then(() => this.props.history.push("/"),
            (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    handleDemo() {
        return this.props.processForm({
            username: "Demo88",
            // email: "guest@gmail.com",
            password: "123456"
        });
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

    render() {
        return (
            <div className='background-image-session'>
                <div className="whole-form">
                    <img src={window.logo} alt="logo" />
                    <h2>Log in to unlock the best of TripAide.</h2>
                    <form className="session-form">
                        {this.renderErrors()}
                        <input
                            className="signup-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        {/* <input
                            className="signup-input"
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address"
                        /> */}
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
                                Don't have an account?
                                <Link to="/signup" onClick={this.props.clearSessionErrors} className="session-link" > Sign up Now </Link>
                            </span>
                            <span>or</span>

                            <span>
                                Log in with
                                <Link to="/" onClick={this.handleDemo} className="session-link"> Demo User </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default LoginForm;