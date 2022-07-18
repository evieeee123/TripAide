import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCities()
    }

    render() {
        const { cities } = this.props;
        if (!cities) return null;
        return (
            <div className="homepage-body">

                <div>
                    <img src={window.background} alt="background" className="homepage-bg" />
                </div>

                <div className="search-buttons">
                    <div className="single-seach-button">
                        <span>Attractions</span>
                        <span class="material-symbols-outlined">local_activity</span>
                    </div>

                    <div className="single-seach-button">
                        <span>Restaurants</span>
                        <span class="material-symbols-outlined">restaurant_menu</span>
                    </div>

                    <div className="single-seach-button">
                        <span>Hotels</span>
                        <span class="material-symbols-outlined">bed</span>
                    </div>

                    <div className="single-seach-button">
                        <span>More</span>
                        <span class="material-symbols-outlined">more_horiz</span>
                    </div>
                </div>

                <div className="city-list">
                    <h3>Dream Your Next Trip</h3>
                    <ul>
                        {
                            cities.map(city =>
                                <div key={city.id} className="container">
                                    {/* <Link to={`/cities/${city.id}`}><img src={city.photoUrl} className="homepage-img" /></Link> */}
                                    <Link to={`/cities/${city.id}`}><img src={window.trip} alt="trip" className="homepage-img" /></Link>
                                    <div className="bottom-left">{city.name}</div>
                                </div>
                            )
                        }
                        <div className="right-arrow"><img src={window.right_arrow} alt="arrow" className="right-icon" /></div>
                    </ul>
                </div>

            </div>
        )
    }

}

export default HomePage;