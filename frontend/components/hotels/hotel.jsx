import React from "react";

class Hotel extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchHotel(this.props.match.params.hotelId)
    }

    render() {
        const { hotel } = this.props;
        if (!hotel) return null;

        return (
            <div>

                <div>
                    <h1>{hotel.name}</h1>
                    <ul>
                        <li>{hotel.address}</li>
                    </ul>

                    <div>
                        <h2>Details</h2>
                        <div>
                            <p>ABOUT</p>
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Hotel;