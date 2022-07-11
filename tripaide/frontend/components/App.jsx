import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"

const App = () => (
    <div>
        <header>
            <nav>
                <Link to='/'><h1>Trip Aide</h1></Link>
                <GreetingContainer />
            </nav>
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;