import React from "react";
import { BsCircleFill } from "react-icons/bs";


class ReviewItem extends React.Component{
    constructor(props){
        super(props)
    }

    
    render(){

        return (
            <div>
                <BsCircleFill className="rating-circle" style={this.props.rating >= 1 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rating >= 2 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rating >= 3 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rating >= 4 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
                <BsCircleFill className="rating-circle" style={this.props.rating >= 5 ? { color: '#00aa6c', fontSize: '10px' } : { color: 'white', fontSize: '10px' }} />
            </div>
        )
    }
}

export default ReviewItem;