import React from "react";
import Review from "../reviews/review";
import { MdLocationOn } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { CgPlayButtonO } from "react-icons/cg";
import { FaBath } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";




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
                    
                <ul className="hotel-location">
                    <span><MdLocationOn /></span>
                    <span>{hotel.address}</span>
                </ul>

                <img src={window.trip} alt="hotel" className="hotel-show-img"/>


                
                    <div className="hotel-info-box">
                        <h2 className="hotel-about-title">About</h2>

                            <div className="hotel-details-box">
                                <div className="hotel-description">{hotel.description}</div>

                                <div className="room-feature-box">
                                    <div className="room-feature-title">Room Features</div>
                                    <div className="room-feature">
                                        <div className="room-feature-left">
                                            <li><span><BsSnow /></span> <span>Air conditioning</span></li>
                                            <li><span><BiBed /></span> <span>Housekeeping</span></li>
                                            <li><span><GiKnifeFork /></span> <span>Minibar</span></li>
                                            <li><span><BiBed /></span> <span>Extra long beds</span></li>
                                        </div>
                                        <div className="room-feature-right">
                                            <li><span><BiBed /></span> <span>Desk</span></li>
                                            <li><span><BiBed /></span> <span>Interconnected rooms available</span></li>
                                            <li><span><CgPlayButtonO /></span> <span>Cable / satellite TV</span></li>
                                            <li><span><FaBath /></span> <span>Walk-in shower</span></li>
                                        </div>
                                    </div>
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