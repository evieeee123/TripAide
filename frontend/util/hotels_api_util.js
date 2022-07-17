export const fetchHotel = hotelId => (
    $.ajax({
        method: 'GET',
        url: `/api/hotels/${hotelId}`
    })
)

export const fetchHotels = (cityId) => (
    $.ajax({
        method: 'GET',
        url: `/api/hotels?city_id=${cityId}`
    })
)