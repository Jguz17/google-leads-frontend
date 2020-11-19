import React, { useReducer } from 'react'
import CreateNewPlacePopUpContext from './createNewPlacePopUpContext'
import createNewPlacePopUpReducer from './createNewPlacePopUpReducer'

import {
    TURN_ACTIVATED_STATE_ON,
    TURN_ACTIVATED_STATE_OFF
} from '../types'

const CreateNewPlacePopUpState = (props) => {
    const initialState = {
        activated: false
    }

    const [state, dispatch] = useReducer(createNewPlacePopUpReducer, initialState)

    const turnActivatedStateOn = () => {
        dispatch({
            type: TURN_ACTIVATED_STATE_ON,
        })
    }

    const turnActivatedStateOff = () => {
        dispatch({
            type: TURN_ACTIVATED_STATE_OFF,
        })
    }

    return (
        <CreateNewPlacePopUpContext.Provider value={{
            activated: state.activated,
            turnActivatedStateOn,
            turnActivatedStateOff
        }}>

        { props.children }
        </CreateNewPlacePopUpContext.Provider>
    )
}

export default CreateNewPlacePopUpState
