import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";
import ReviewItem from "./review_item"
import { clearReviews } from "../../actions/review_actions";
import Rating from "../rating/rating";

class Review extends React.Component {
    constructor(props){
        super(props)

        this.handleUserState = this.handleUserState.bind(this);
    }

    // componentDidMount(){
    //     // this.props.fetchReview(this.props.params.match.reviewId);
    //     // this.props.fetchSpot(this.props.match.params.spotId)
        // this.props.clearReviews();
    // }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.deleteReview(review)
    //         .then(() => window.location.reload())
    // }

    handleUserState(){
        const {currentUser, place, places} = this.props;
        if (currentUser === undefined){
            return `/login`
        }else{
            return `/${places}/${place.id}/reviews/new`
        }
    }

    
    
    render(){
        const {reviews, spot, places} = this.props;
        let reviewId = [];
        for(let i = 0; i < reviews.length; i++){
            reviewId.push(reviews[i].user_id)
        }

        // if (reviews.length === 0) return null;
// debugger
        return (
            <div className="review-box">
                <div className="inner-review-box">
                    <div className="review-header">
                        <div className="review-header-title">Review<span>({reviews.length})</span></div>
                        {
                            (this.props.currentUser && reviewId.includes(this.props.currentUser.id)) ?
                                <div className="had-review-box">
                                    <button className="had-review-button">Write a review</button> 
                                    <div className="had-review-button-hover">You've already submitted a review of this place</div>
                                </div>
                                :
                                <button className="review-header-button"><Link to={this.handleUserState}>Write a review</Link></button>
                        }
                    </div>

                    <div>
                    {
                        reviews.map((review) => 
                            <div key={review.id} className="single-review-box">
                                <div className="review-user-box">
                                    <div className="review-user-profile-box">
                                        <img src={window.user_profile_icon} alt="user_profile_icon" className="user-profile-icon" />
                                        <div>{review.reviewer}</div>
                                    </div>

                                    <div className="r-bar">
                                        <div className="review-title-bar">
                                            <div>
                                                <div className="show-review-rate"><Rating rate={review.rating}/></div>
                                                <p className="single-review-title">{review.title}</p>
                                            </div>

                                            {
                                                (this.props.currentUser && this.props.currentUser.id === review.user_id) ? <div className="review-dropdown"  >
                                                    <span className="material-symbols-outlined" >
                                                        more_vert
                                                    </span>
                                                    <div className='review-dropdown-box'>
                                                        <button className='review-dropdown-edit'><Link to={`/${places}/${review.reviewable_id}/reviews/${review.id}/edit`}>Edit review</Link></button>
                                                        <button onClick={() => dispatch(deleteReview(review.id))} className='review-dropdown-link'>Delete</button>
                                                    </div>
                                                </div> : ""
                                            }

                                        </div>

                                        <div>
                                            <p className="review-description">{review.body}</p>
                                            <p className="whole-review-date"><span className="review-date">Date of visit: </span>{review.visit_date}</p>
                                        </div>
                                    </div>

                                </div>

                                
                            </div>
                        )
                    }
                    </div>

                </div>
            </div>
        )
    }
}

export default Review;

