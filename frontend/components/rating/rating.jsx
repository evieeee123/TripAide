import React from "react";
import { BsCircleFill } from "react-icons/bs";


class Rating extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div>
                <BsCircleFill className="rating-circle" style={this.props.rate >= 1 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rate >= 2 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rate >= 3 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rate >= 4 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rate >= 5 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
            </div>
        )
    }
}

export default Rating;