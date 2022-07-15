import React from "react";

class Spot extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
    }

    render() {
        const {spot} = this.props;
        if (!spot) return null;

        return (
            <div>
                <h1>{spot.name}</h1>

                <ul>
                    <li>{spot.spot_type}</li>
                </ul>

                <div>
                    <h2>About</h2>
                    <p>{spot.description}</p>
                    <h3>Suggested duration</h3>
                    <p>{spot.duration}</p>
                </div>
            </div>
        )
    }

}

export default Spot;