import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import HomePageConatiner from "./home/home_page_container";
import SpotIndexContainer from "./spots/spot_index_container";
import SpotContainer from "./spots/spot_container";
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import CityContainer from "./cities/city_container";
import RestaurantContainer from "./restaurants/restaurant_container";


const App = () => (
    <div>
        <header>
            <nav>
                <Link to='/'><img src={window.tripaide} alt="tripaide" className="nav-logo" /></Link>
                <div><GreetingContainer /></div>
            </nav>
        </header>

        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/cities/:cityId" component={CityContainer} />
            <Route path="/spotslist/:cityId" component={SpotIndexContainer} />
            <Route path="/spots/:spotId" component={SpotContainer} />
            <Route path="/restaurantslist/:cityId" component={RestaurantIndexContainer} />
            <Route path="/restaurants/:restaurantId" component={RestaurantContainer} />
            <Route path="/" component={HomePageConatiner} />
        </Switch>
    </div>
);

export default App;