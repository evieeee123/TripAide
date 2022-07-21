import React from "react";
import { MdShareLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";

class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            search: ""
        }

        this.goSpot = this.goSpot.bind(this);
        this.goRestaurant = this.goRestaurant.bind(this);
        this.goHotel = this.goHotel.bind(this);
        this.goCity = this.goCity.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    goSpot(id){
        this.props.history.push(`/spots/${id}`)
    }

    goRestaurant(id){
        this.props.history.push(`/restaurants/${id}`)
    }

    goHotel(id){
        this.props.history.push(`/hotels/${id}`)
    }

    goCity(id){
        this.props.history.push(`/cities/${id}`)
    }


    handleSearch(e){
        this.setState({ search: e.target.value })
    }

    render(){
        const {spots, hotels, restaurants, cities} = this.props;
        if (!spots || !hotels || !restaurants || !cities) return null;

        return (
            <div>

                <div className="search-dropdown">
                    <div className="search-box-content">
                        //spot
                        <hr />
                        {
                            Object.values(spots).map(spot => {
                                if(spot.name.toLowerCase().startsWith(this.state.search.toLowerCase())){
                                    return (
                                        <div key={spot.id} className="each-place-search">
                                            <li onClick={() => this.goSpot(spot.id)}>
                                                <div><MdShareLocation className="search-location-icon" /></div>
                                                <div className="search-place-info">
                                                    <h2>{spot.name}</h2>
                                                    <p>{spot.spot_type}</p>
                                                </div>
                                            </li>
                                            <hr />
                                        </div>
                                    )
                                }
                            })
                        }
                        //restaurant
                        {
                            Object.values(restaurants).map(restaurant => {
                                if (restaurant.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                    return (
                                        <div key={restaurant.id} className="each-place-search">
                                            <li onClick={() => this.goRestaurant(restaurant.id)}>
                                                <div><MdShareLocation className="search-location-icon" /></div>
                                                <div className="search-place-info">
                                                    <h2>{restaurant.name}</h2>
                                                    <p>{restaurant.cuisines}</p>
                                                </div>
                                            </li>
                                            <hr />
                                        </div>
                                    )
                                }
                            })
                        }
                        //hotel
                        {
                            Object.values(hotels).map(hotel => {
                                if (hotel.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                    return (
                                        <div key={hotel.id} className="each-place-search">
                                            <li onClick={() => this.goHotel(hotel.id)}>
                                                <div><MdShareLocation className="search-location-icon" /></div>
                                                <div className="search-place-info">
                                                    <h2>{hotel.name}</h2>
                                                    <p>{hotel.phonenum}</p>
                                                </div>
                                            </li>
                                            <hr />
                                        </div>
                                    )
                                }
                            })
                        }
                        //city
                        {
                            Object.values(cities).map(city => {
                                if (city.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                    return (
                                        <div key={city.id} className="each-place-search">
                                            <li onClick={() => this.goCity(city.id)}>
                                                <div><MdShareLocation className="search-location-icon" /></div>
                                                <div className="search-place-info">
                                                    <h2>{city.name}</h2>
                                                </div>
                                            </li>
                                            <hr />
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>

                <div className="search-container">
                    <img src={window.background} alt="bg" className="search-bg" />
                        <div className="search-bar">
                        <div >
                                <CgSearch className="search-icon" />
                        </div>
                        <input 
                            type="text" 
                            className="searchtext" 
                            placeholder="Where to?" 
                            onChange={this.handleSearch} 
                        />
                    </div>
                </div>
                </div>



            </div>
        )
    }
}

export default Search;