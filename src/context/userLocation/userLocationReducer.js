import {
    GET_USER_LOCATION,
    SET_USER_GEOLOCATION,
    GET_PLACES_INFORMATION,
    CLEAR_PLACES,
    SET_NEXT_PAGE_TOKEN,
    SET_CURRENT_PAGE,
    SET_PAGE_BACK,
    SET_USER_RADIUS,
    SET_PLACES_TYPE
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
        case CLEAR_PLACES:
            return {
                ...state,
                places: []
            }
        case SET_NEXT_PAGE_TOKEN:
            return {
                ...state,
                pageTokens: state.pageTokens.concat(action.payload)
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case SET_PAGE_BACK: 
            return {
                ...state, 
                currentPage: state.currentPage - 1
            }
        case SET_PLACES_TYPE:
            return {
                ...state,
                placesType: action.payload
            }
        case SET_USER_RADIUS:
            return {
                ...state,
                userRadiusInMeters: action.payload
            }
        default:
            return state
    }
}