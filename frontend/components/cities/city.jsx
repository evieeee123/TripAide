import React from "react";
import { Link } from "react-router-dom";

class City extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        // cityId depend on the routes in app.jsx
        this.props.fetchCity(this.props.match.params.cityId)
        // debugger
    }

    render(){
        const { city } = this.props;
        if (!city) return null;
        return (
            <div className="city-page">
                <div className="city-title">
                    <span>Explore </span><span className="city-name"> {city.name}</span>
                </div>

                <div className="citypage-img">

                </div>

                <div className="citypage-about">
                    <h2>{city.title}</h2>

                    <p>{city.description}</p>
                </div>

                <div className="citypage-choose">
                    <h2>Essential {city.name}</h2>

                    <div className="do-part">
                        <div>
                            <h3>Do</h3>
                            <p>{city.do_description}</p>
                            <p><Link to={`/spotslist/${city.id}`}>See all</Link></p>
                        </div>
                        <div className="cities">
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                        </div>
                    </div>

                    <div className="do-part">
                        <div>
                            <h3>Stay</h3>
                            <p>{city.stay_description}</p>
                            <p><Link to={`/hotelslist/${city.id}`}>See all</Link></p>
                        </div>
                    
                        <div className="cities">
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                        </div>
                    </div>

                    <div className="do-part">
                        <div>
                            <h3>Eat</h3>
                            <p>{city.eat_description}</p>
                            <p><Link to={`/restaurantslist/${city.id}`}>See all</Link></p>
                        </div>

                        <div className="cities">
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
        // return current;
    }

}

export default City;