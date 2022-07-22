import { Link } from "react-router-dom";
import React from "react";
import { BsCircleFill } from "react-icons/bs";

class CreateReviewForm extends React.Component {

    constructor(props) {
        super(props)

        let type_name;
        if (this.props.place === "spot") {
            type_name = "Spot"
        } else if (this.props.place === "hotel") {
            type_name = "Hotel"
        } else if (this.props.place === "restaurant") {
            type_name = "Restaurant"
        }

        this.state = {
            user_id: this.props.user_id,
            reviewable_id: this.props.match.params.placeId,
            reviewable_type: type_name,
            rating: 0,
            title: "",
            body: "",
            visit_date: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearReviewErrors()
        // this.props.fetchSpot(this.props.match.params.spotId);
        if (this.props.place === "spot") {
            // can't use spotId because of the Route
            this.props.fetchSpot(this.props.match.params.placeId);
        } else if (this.props.place === "hotel") {
            this.props.fetchHotel(this.props.match.params.placeId);
        } else if (this.props.place === "restaurant") {
            this.props.fetchRestaurant(this.props.match.params.placeId);
        }
        this.props.fetchReview(this.props.match.params.reviewId)
            .then((e) => this.prefillState())
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(this.props.review)
        }
    }

    prefillState(e){
        this.setState({
            user_id: this.props.user_id,
            reviewable_id: this.props.match.params.placeId,
            reviewable_type: type_name,
            rating: this.props.review.rating,
            title: this.props.review.title,
            body: this.props.review.body,
            visit_date: this.props.review.visit_date
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state)
            .then(() => this.props.history.push(`/${this.props.placeType}/${this.props.placeId}`))
    }


    update(field) {
        if (field === 'rating') {
            return e => this.setState({ [field]: parseInt(e.currentTarget.value) })
        } else {
            return (e) => this.setState({ [field]: e.currentTarget.value })
        }
    }

    rate() {
        if (this.state.rating === 0) {
            return "Click to rate"
        } else if (this.state.rating === 1) {
            return "Terrible"
        } else if (this.state.rating === 2) {
            return "Poor"
        } else if (this.state.rating === 3) {
            return "Average"
        } else if (this.state.rating === 4) {
            return "Very Good"
        } else if (this.state.rating === 5) {
            return "Excellent"
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { currentUser, place } = this.props;
        if (!place) return null;
        return (
            <div className="create-review-page">

                <div className="revivew-form-left">

                    <div className="create-review">
                        <p className="create-review-welcome">Edit your review</p>
                    </div>

                    <form className="create-review-form">
                        <div className="form-error">{this.renderErrors()}</div>
                        <div className="rating-title">Your overall rating of this place</div>
                        <div className="whole-rating">
                            <div className="form-rating">
                                <label htmlFor="rating-1"><input id="rating-1" type="radio" value="1" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 1}  />
                                    <BsCircleFill className="rating-circle" style={this.state.rating >= 1 ? { color: '#00aa6c' } : { color: 'white' }} /></label>

                                <label htmlFor="rating-2"><input id="rating-2" type="radio" value="2" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 2} />
                                    <BsCircleFill className="rating-circle" style={this.state.rating >= 2 ? { color: '#00aa6c' } : { color: 'white' }} /></label>

                                <label htmlFor="rating-3"><input id="rating-3" type="radio" value="3" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 3} />
                                    <BsCircleFill className="rating-circle" style={this.state.rating >= 3 ? { color: '#00aa6c' } : { color: 'white' }} /></label>

                                <label htmlFor="rating-4"><input id="rating-4" type="radio" value="4" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 4} />
                                    <BsCircleFill className="rating-circle" style={this.state.rating >= 4 ? { color: '#00aa6c' } : { color: 'white' }} /></label>

                                <label htmlFor="rating-5"><input id="rating-5" type="radio" value="5" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 5}/>
                                    <BsCircleFill className="rating-circle" style={this.state.rating >= 5 ? { color: '#00aa6c' } : { color: 'white' }} /></label>
                            </div>

                            <div>
                                <div className="square"><p>{this.rate()}</p></div>

                            </div>
                        </div>

                        <div className="review-title">
                            <p className="rating-title">Title of your review</p>
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </div>

                        <div>
                            <p className="rating-title">Your review</p>
                            <textarea cols="60" rows="10" value={this.state.body} onChange={this.update('body')}></textarea>
                        </div>

                        <div>
                            <div className="rating-title">When did you visit?</div>
                            <input type="date" id="visit_date" min="2022-01-01" onChange={this.update('visit_date')} value={this.state.visit_date} />
                        </div>

                        <button className="submit-review-button" onClick={this.handleSubmit}>Update your review</button>
                    </form>

                </div>
            </div>
        )
    }

}

export default CreateReviewForm;