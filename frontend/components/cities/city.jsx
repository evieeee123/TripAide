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
            <div>
                <div>
                    <h1>Explore </h1><h1> {city.name}</h1>
                </div>

                <div>
                    <h2>{city.title}</h2>
                </div>

                <div>
                    <p>{city.description}</p>
                </div>

                <div>
                    <h2>Essential {city.name}</h2>
                    <div>
                        <h3>Do</h3>
                        <p>{city.do_description}</p>
                        <p><Link to={`/spotslist/${city.id}`}>See all</Link></p>
                    </div>
                    <div>
                        <h3>Stay</h3>
                        <p>{city.stay_description}</p>
                        <p><Link to={`/hotelslist/${city.id}`}>See all</Link></p>
                    </div>
                    <div>
                        <h3>Eat</h3>
                        <p>{city.eat_description}</p>
                        <p><Link to={`/restaurantslist/${city.id}`}>See all</Link></p>
                    </div>
                </div>
            </div>
        )
        // return current;
    }

}

export default City;