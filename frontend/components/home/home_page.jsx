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
                    <div className="single-seach-button">Attractions</div>
                    <div className="single-seach-button">Restaurants</div>
                    <div className="single-seach-button">Hotels</div>
                    <div className="single-seach-button">More</div>
                </div>

                <div className="city-list">
                    <h3>Dream Your Next Trip</h3>
                    <ul>
                        {
                            cities.map(city =>
                                <div key={city.id} className="container">
                                    <Link to={`/cities/${city.id}`}><img src={city.photoUrl} className="homepage-img" /></Link>
                                    {/* <div className="homepage-img"></div> */}
                                    <div className="bottom-left">{city.name}</div>
                                </div>
                            )
                        }
                    </ul>
                </div>

            </div>
        )
    }

}

export default HomePage;