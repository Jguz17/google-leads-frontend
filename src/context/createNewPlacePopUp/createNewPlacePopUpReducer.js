import {
    TURN_ACTIVATED_STATE_ON,
    TURN_ACTIVATED_STATE_OFF
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case TURN_ACTIVATED_STATE_ON:
            return {
                ...state,
                activated: true
            }
        case TURN_ACTIVATED_STATE_OFF:
            return {
                ...state,
                activated: false
            }
        default:
            return state
    }
}