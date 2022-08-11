import React from "react";
import { MdShareLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";

class Search extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            search: "",
            // visible: "show"
        }

        this.goSpot = this.goSpot.bind(this);
        this.goRestaurant = this.goRestaurant.bind(this);
        this.goHotel = this.goHotel.bind(this);
        this.goCity = this.goCity.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        // this.handleShow = this.handleShow.bind(this);
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

    // handleShow(){
    //     this.setState({ visible: "show" })
    // }

    render(){
        let searchResult = [];
        const {spots, hotels, restaurants, cities} = this.props;
        if (!spots || !hotels || !restaurants || !cities) return null;

        return (
            <div>

                <div className="search-dropdown">


                <div className="search-container">
                    <img src={window.background} alt="bg" className="search-bg" />
                        <div className="search-bar">
                            <div className="searchbar-ele">
                            <div className="icon">
                                    <CgSearch className="search-icon" />
                            </div>
                            <input 
                                type="text" 
                                className="searchtext" 
                                placeholder="Where to?" 
                                onChange={this.handleSearch} 
                                // onClick={this.handleShow}
                            />
                            </div>

                            <div className="search-box-content">

                                {/* <hr /> */}
                                {/* <div className="place-catg">CITY</div>  */}
                                {
                                    cities.map(city => {
                                        if (city.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            searchResult.push(city.name)
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
                              
                        {/* //spot */}
                                {
                                    spots.map(spot => {
                                        if (spot.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            searchResult.push(spot.name)
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
                        {/* //restaurant */}
                                {
                                    restaurants.map(restaurant => {
                                        if (restaurant.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            searchResult.push(restaurant.name)
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
                        {/* //hotel */}
                                {
                                    hotels.map(hotel => {
                                        if (hotel.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            searchResult.push(hotel.name)
                                            return (
                                                <div key={hotel.id} className="each-place-search">
                                                    <li onClick={() => this.goHotel(hotel.id)}>
                                                        <div><MdShareLocation className="search-location-icon" /></div>
                                                        <div className="search-place-info">
                                                            <h2>{hotel.name}</h2>
                                                            <p>from {hotel.phonenum}/night</p>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                </div>
                                            )
                                        }
                                    })
                                }

                                {(searchResult.length === 0) ? 
                                    <div className="search-error">Sorry, we couldn't find "{this.state.search}" </div> 
                                : <div></div>}

                            </div>
                    </div>
                </div>
                </div>



            </div>
        )
    }
}

export default Search;