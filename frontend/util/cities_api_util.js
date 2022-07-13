export const fetchCity = cityId => (
    $.ajax({
        method: 'GET',
        url: `/api/cities/${cityId}`
    })
)

export const fetchCities = () => (
    $.ajax({
        method: 'GET',
        url: '/api/cities'
    })
)