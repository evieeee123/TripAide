import React from "react";

class Restaurant extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render(){
        const {restaurant} = this.props;
        if (!restaurant) return null;

        return (
            <div>

                <div>
                    <h1>{restaurant.name}</h1>
                    <ul>
                        <li>{restaurant.price_range} {restaurant.cuisines}</li>
                        <li>{restaurant.res_address} {restaurant.phonenum}</li>
                    </ul>

                    <div>
                        <h2>Details</h2>
                        <div>
                            <p>ABOUT</p>
                            <p>{restaurant.description}</p>
                        </div>
                        <div>
                            <p>SPECIAL DIETS</p>
                            <p>{restaurant.special_diets}</p>
                        </div>
                        <div>
                            <p>MEALS</p>
                            <p>{restaurant.meals}</p>
                        </div>
                        <div>
                            <p>CUISINES</p>
                            <p>{restaurant.cuisines}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Restaurant;