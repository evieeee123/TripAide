import React from "react";
import Review from "../reviews/review";

class Hotel extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchHotel(this.props.match.params.hotelId)
    }

    componentWillUnmount() {
        this.props.clearReviews()
    }

    render() {
        const { hotel, reviews, currentUser, places } = this.props;
        if (!hotel) return null;
        // if (reviews.length === 0) return null;


        return (
            <div className="hotel-show-page">

                <div className="spot-show-title">{hotel.name}</div>
                    
                <div>
                    <ul>
                        <li>{hotel.address}</li>
                    </ul>

                    <div>
                        <h2>Details</h2>
                        <div>
                            <p>ABOUT</p>
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Review reviews={reviews} place={hotel} places={places} currentUser={currentUser} />
                </div>

            </div>
        )
    }

}

export default Hotel;