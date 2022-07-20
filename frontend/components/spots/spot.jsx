import React from "react";
import ReviewContainer from "../reviews/review_container";
import Review from "../reviews/review";

class Spot extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
        // this.props.fetchReview(this.props.match.params.reviewId)
    }

    render() {
        const {spot, reviews, currentUser} = this.props;
        if (!spot) return null;
        if (reviews.length === 0) return null;

        return (
            <div className="spot-show-page">
                <div className="spot-show-title">{spot.name}</div>

                <ul className="spot-type">
                    <li>{spot.spot_type}</li>
                </ul>

                <div className="spot-show-info">
                    <div className="spot-about">
                        <h2>About</h2>
                        <div className="spot-about-dt">{spot.description}</div>
                        <h3>Suggested duration</h3>
                        <div className="spot-about-dt">{spot.duration}</div>
                    </div>
                    <div><img src={window.trip} alt="trip" /></div>
                </div>

                <div>
                    <Review reviews={reviews} spot={spot} currentUser={currentUser} />
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