import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";


class Rating extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        // return (
        //     <div>
        //         <BsCircleFill className="rating-circle" style={this.props.rate >= 1 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
        //         <BsCircleFill className="rating-circle" style={this.props.rate >= 2 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
        //         <BsCircleFill className="rating-circle" style={this.props.rate >= 3 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
        //         <BsCircleFill className="rating-circle" style={this.props.rate >= 4 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
        //         <BsCircleFill className="rating-circle" style={this.props.rate >= 5 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
        //     </div>
        // )

        return (
            <div className="rate-cir">
                {(this.props.rate >= 1) ? <FaCircle /> : <FaRegCircle />}
                {(this.props.rate >= 2) ? <FaCircle /> : <FaRegCircle />}
                {(this.props.rate >= 3) ? <FaCircle /> : <FaRegCircle />}
                {(this.props.rate >= 4) ? <FaCircle /> : <FaRegCircle />}
                {(this.props.rate >= 5) ? <FaCircle /> : <FaRegCircle />}
            </div>
        )
    }
}

export default Rating;