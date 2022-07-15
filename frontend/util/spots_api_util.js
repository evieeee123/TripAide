export const fetchSpot = spotId => (
    $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}`
    })
)

export const fetchSpots = (cityId) => (
    $.ajax({
        method: 'GET',
        url: `/api/spots?city_id=${cityId}`
    })
)