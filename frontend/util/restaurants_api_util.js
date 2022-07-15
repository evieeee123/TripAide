export const fetchRestaurant = restaurantId => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${restaurantId}`
    })
)

export const fetchRestaurants = (cityId) => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants?city_id=${cityId}`
    })
)