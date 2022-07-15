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
            <div>
                <h3>Dream Your Next Trip</h3>
                <ul>
                    {
                        cities.map(city =>
                            <div key={city.id}>
                                <div><Link to={`/cities/${city.id}`}>{city.name}</Link></div>
                            </div>
                        )
                    }
                </ul>
            </div>
        )
    }

}

export default HomePage;