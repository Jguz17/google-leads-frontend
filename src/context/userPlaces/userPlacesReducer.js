import {
    CREATE_PLACE,
    DELETE_PLACE,
    SET_CURRENT,
    DELETE_CURRENT,
    FILTER_PLACES,
    CLEAR_FILTER,
    UPDATE_PLACE,
    PLACE_ERROR,
    GET_PLACES,
    CLEAR_PLACES,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case CREATE_PLACE:
            return {
                ...state,
                places: state.places.concat(action.payload),
                loading: false
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place._id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case DELETE_CURRENT:
            return {
                ...state,
                current: null,
                loading: false
            }
        case UPDATE_PLACE:
            console.log(action.payload)

            return {
                ...state,
                places: state.places.map(place => 
                    place._id === action.payload._id ? action.payload : place
                ),
                loading: false
            }
        case FILTER_PLACES:
            return {
                ...state,
                filtered: state.places.filter(place => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return place.name.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case  PLACE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_PLACES:
            return {
                ...state,
                places: action.payload,
                loading: false
            }
        case CLEAR_PLACES:
            return {
                ...state,
                places: null,
                filtered: null,
                error: null,
                current: null
            }
        default:
            return state
    }
}