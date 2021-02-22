import {
    SET_POPUP_TYPE,
    CLEAR_POPUP_TYPE,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_POPUP_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case CLEAR_POPUP_TYPE:
            return {
                ...state,
                type: ''
            }
        default:
            return state
    }
}