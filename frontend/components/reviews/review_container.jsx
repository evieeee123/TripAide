import { connect } from "react-redux";
import { fetchReview } from "../../actions/review_actions";
import { deleteReview } from "../../util/reviews_api_util";
import Review from "./review";

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
        

    }
};

const mapDispatchToProps = dispatch => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    deleteReview: () => dispatch(deleteReview())
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
