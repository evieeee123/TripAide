export const fetchSpot = spotId => (
    $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}`
    })
)

export const fetchSpots = () => (
    $.ajax({
        method: 'GET',
        url: '/api/spots'
    })
)