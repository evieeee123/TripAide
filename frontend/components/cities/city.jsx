import React from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";


class City extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        // cityId depend on the routes in app.jsx
        this.props.fetchCity(this.props.match.params.cityId);
        // debugger
        this.props.fetchSpots(this.props.match.params.cityId);
        this.props.fetchHotels(this.props.match.params.cityId);
        this.props.fetchRestaurants(this.props.match.params.cityId);
        window.scrollTo(0, 0)
    }

    render(){
        const { city, spots, hotels, restaurants } = this.props;
        if (!city || !spots || !hotels || !restaurants) return null;
        return (
            <div className="city-page">
                <div className="city-title">
                    <span>Explore </span><span className="city-name"> {city.name} </span>
                </div>

                <div className="city-img-box">
                    <div className="city-img-left"><img src={city.image_url_1} alt="trip" className="city-img-1" /></div>
                    <div className="city-img-right">
                        <img src={city.image_url_2} alt="trip" className="city-img-2" />
                        <img src={city.image_url_3} alt="trip" className="city-img-2" />
                    </div>
                </div>

                <div className="citypage-about">
                    <h2>{city.title}</h2>

                    <p>{city.description}</p>
                </div>

                <div className="citypage-choose">
                    <h2>Essential {city.name}</h2>

                    <div className="do-part">
                        <div className="do-info">
                            <h3>Do</h3>
                            <p>{city.do_description}</p>
                            <p className="see-all"><Link to={`/spotslist/${city.id}`}>See all</Link></p>
                        </div>
                        <div className="spots-box">
                            {/* <div className="single-city-img"></div>
                            <div className="single-city-img"></div>
                            <div className="single-city-img"></div> */}
                            <ul>
                                {
                                    spots.map(spot =>
                                        <div key={spot.id} className="spots-img-box">
                                            {/* <Link to={`/spots/${spot.id}`}><img src={window.trip} alt="trip" className="single-spot-img" /></Link> */}
                                            <Link to={`/spots/${spot.id}`}><img src={spot.image_url} alt="trip" className="single-spot-img" /></Link>
                                            <div className="spots-box-info">
                                                <Link to={`/spots/${spot.id}`} className="spot-box-name"><span >{spot.name}</span></Link>
                                                <span className="citypage-rate"><Rating rate={spot.rating} /></span>
                                               
                                                <span className="spot-box-type">{spot.spot_type}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="spot-right-arrow"><img src={window.right_arrow} alt="arrow" className="right-icon" /></div>
                    </div>

                    <div className="do-part">
                        <div className="do-info">
                            <h3>Stay</h3>
                            <p>{city.stay_description}</p>
                            <p className="see-all"><Link to={`/hotelslist/${city.id}`}>See all</Link></p>
                        </div>
                    
                        <div className="spots-box">
                            <ul>
                                {
                                    hotels.map(hotel =>
                                        <div key={hotel.id} className="spots-img-box">
                                            <Link to={`/hotels/${hotel.id}`}><img src={hotel.image_url} alt="trip" className="single-spot-img" /></Link>
                                            <div className="spots-box-info">
                                                <Link to={`/hotels/${hotel.id}`} className="spot-box-name"><span >{hotel.name}</span></Link>
                                                <span className="citypage-rate"><Rating rate={hotel.rating} /></span>
                                                <span className="spot-box-type">from {hotel.phonenum}/nignt</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="spot-right-arrow"><img src={window.right_arrow} alt="arrow" className="right-icon" /></div>
                    </div>

                    <div className="do-part">
                        <div className="do-info">
                            <h3>Eat</h3>
                            <p>{city.eat_description}</p>
                            <p className="see-all"><Link to={`/restaurantslist/${city.id}`}>See all</Link></p>
                        </div>

                        <div className="spots-box">
                            <ul>
                                {
                                    restaurants.map(restaurant =>
                                        <div key={restaurant.id} className="spots-img-box">
                                            <Link to={`/restaurants/${restaurant.id}`}><img src={restaurant.image_url} alt="trip" className="single-spot-img" /></Link>
                                            <div className="spots-box-info">
                                                <Link to={`/restaurants/${restaurant.id}`} className="spot-box-name"><span >{restaurant.name}</span></Link>
                                                <span className="citypage-rate"><Rating rate={restaurant.rating} /></span>

                                                <span className="spot-box-type">{restaurant.price_range} &#183; {restaurant.special_diets} </span>
                                            </div>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="spot-right-arrow"><img src={window.right_arrow} alt="arrow" className="right-icon" /></div>
                    </div>
                </div>
            </div>
        )
        // return current;
    }

}

export default City;