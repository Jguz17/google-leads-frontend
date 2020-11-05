import {
    GET_USER_LOCATION,
    SET_USER_GEOLOCATION,
    GET_PLACES_INFORMATION
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_USER_LOCATION:
            return {
                ...state,
                userAddress: action.payload
            }
        case SET_USER_GEOLOCATION: 
            return {
                ...state,
                userGeolocation: {
                    lat: action.payload.lat,
                    lng: action.payload.lng
                }
            }
        case GET_PLACES_INFORMATION:
            return {
                ...state,
                places: state.places.concat(action.payload)
            }
        default:
            return state
    }
}