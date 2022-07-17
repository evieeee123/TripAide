import * as HotelApiUtil from "../util/hotels_api_util"

export const RECEIVE_HOTELS = "RECEIVE_HOTELS";
export const RECEIVE_HOTEL = "RECEIVE_HOTEL";
export const CLEAR_HOTELS = "CLEAR_HOTELS";


const receiveHotels = hotels => ({
    type: RECEIVE_HOTELS,
    hotels
})

const receiveHotel = hotel => ({
    type: RECEIVE_HOTEL,
    hotel
});

export const clearHotels = () => ({
    type: CLEAR_HOTELS
});

export const fetchHotels = (cityId) => dispatch => (
    HotelApiUtil.fetchHotels(cityId)
        .then(hotels => dispatch(receiveHotels(hotels)))
)

export const fetchHotel = hotelId => dispatch => (
    HotelApiUtil.fetchHotel(hotelId)
        .then(hotel => dispatch(receiveHotel(hotel)))
);