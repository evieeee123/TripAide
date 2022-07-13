import * as CityApiUtil from "../util/cities_api_util"

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";

const receiveCities = cities => ({
    typs: RECEIVE_CITIES,
    cities
})

const receiveCity = city => ({
    type: RECEIVE_CITY,
    city
});

export const fetchCities = () => dispatch => (
    CityApiUtil.fetchCities()
        .then(cities => dispatch(receiveCities(cities)))
)

export const fetchCity = cityId => dispatch => (
    CityApiUtil.fetchCity(cityId)
        .then(city => dispatch(receiveCity(city)))
);