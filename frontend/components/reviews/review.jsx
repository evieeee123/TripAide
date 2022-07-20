import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";

class Review extends React.Component {
    constructor(props){
        super(props)

        this.handleUserState = this.handleUserState.bind(this);
    }

    // componentDidMount(){
    //     // this.props.fetchReview(this.props.params.match.reviewId);
    //     // this.props.fetchSpot(this.props.match.params.spotId)

    // }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.deleteReview(review)
    //         .then(() => window.location.reload())
    // }

    handleUserState(){
        const {currentUser, spot} = this.props;
        if (currentUser === undefined){
            return `/login`
        }else{
            return `/spots/${spot.id}/reviews/new`
        }
    }

    render(){
        console.log(this.props)
        const {reviews, spot} = this.props;
        return (
            <div>
                <div><Link to={this.handleUserState}>Write review</Link></div>

                {
                    reviews.map((review) => 
                        <div key={review.id}>
                            <div>{review.reviewer}</div>
                            <div>{review.rating}</div>

                            <div>
                                <p>{review.title}</p>
                                <p>{review.body}</p>
                                <p>Date of visit:{review.visit_date}</p>
                            </div>
                            
                <div className='review-dropdown-links'>
                    <Link className='review-dropdown-link' to={`/spots/${review.reviewable_id}/reviews/${review.id}/edit`}>Edit review</Link>
                    <button onClick={() => dispatch(deleteReview(review.id))} className='review-dropdown-link'>Delete</button>
                </div>
                        </div>
                    )
                }

            </div>
        )
    }
}

export default Review;

