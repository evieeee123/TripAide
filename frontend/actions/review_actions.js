import * as ReviewAPIUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const CLEAR_REVIEWS = "CLEAR_REVIEWS";

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId,
});

export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
});

export const clearReviews = () => ({
    type: CLEAR_REVIEWS
});

export const fetchReview = (reviewId) => dispatch => (
    ReviewAPIUtil.fetchReview(reviewId)
        .then((review) => dispatch(receiveReview(review)))
)

export const createReview = (review) => dispatch => {
    // debugger
    return (
        ReviewAPIUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review)), 
            (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
    )
}

export const updateReview = (review) => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)