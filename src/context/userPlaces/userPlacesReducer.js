import {
    CREATE_PLACE,
    DELETE_PLACE,
    SET_CURRENT,
    DELETE_CURRENT,
    FILTER_PLACES,
    CLEAR_FILTER,
    UPDATE_PLACE,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case CREATE_PLACE:
            return {
                ...state,
                places: state.places.concat(action.payload)
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.id !== action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case DELETE_CURRENT:
            return {
                ...state,
                current: null
            }
        case UPDATE_PLACE:
            return {
                ...state,
                places: state.places.map(place => 
                    place.id === action.payload.id ? action.payload : place
                )
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
        default:
            return state
    }
}