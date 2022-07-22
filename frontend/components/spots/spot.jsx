import React from "react";
import ReviewContainer from "../reviews/review_container";
import Review from "../reviews/review";
import Rating from "../rating/rating";

class Spot extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
        // if clearreview in componentdidmount, it will clear all things when user go into spot show page
        // this.props.clearReviews()
        // this.props.fetchReview(this.props.match.params.reviewId)
    }

    componentWillUnmount() {
        // clear review when user leave the page
        this.props.clearReviews()
    }

    render() {
        const {spot, reviews, currentUser, places, clearReviews} = this.props;
        if (!spot) return null;
        // if (reviews.length === 0) return null;

        // let rate;
        // let sum = 0;
        // reviews.map(review => sum += review.rating);
        // rate = Math.round(sum/reviews.length)
// debugger
        return (
            <div className="spot-show-page">
                <div className="spot-show-title">{spot.name}</div>

                <div className="header-rating">
                    <Rating rate={spot.rating} />  
                    <span className="rating-num">{reviews.length}</span>
                    <ul className="spot-type">
                        <li>| {spot.spot_type}</li>
                    </ul>
                </div>


                <div className="spot-show-info">
                    <div className="spot-about-box">
                        <h2>About</h2>
                        <div className="spot-about-dt">{spot.description}</div>
                        <h3>Suggested duration</h3>
                        <div className="spot-about-dt">{spot.duration}</div>
                    </div>
                    <img src={window.trip} alt="trip" className="spot-show-img" />
                </div>

                <div>
                    <Review reviews={reviews} place={spot} places={places} currentUser={currentUser} clearReviews={clearReviews} />
                    {/* <ul>{
                        reviews.map(review => 
                            <div key={review.id}>
                                <p>{review.title}</p>

                            </div>
                        )
                    }</ul> */}
                </div>
            </div>
        )
    }

}

export default Spot;