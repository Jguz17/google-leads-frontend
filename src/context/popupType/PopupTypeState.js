import React, { useReducer } from 'react'
import PopupTypeContext from './popupTypeContext'
import popupTypeReducer from './popupTypeReducer'

import {
    SET_POPUP_TYPE,
    CLEAR_POPUP_TYPE,
} from '../types'

const PopupTypeState = (props) => {
    const initialState = {
        type: ''
    }

    const [state, dispatch] = useReducer(popupTypeReducer, initialState)

    const setPopupType = (type) => {
        dispatch({
            type: SET_POPUP_TYPE,
            payload: type
        })
    }

    const clearPopupType = () => {
        dispatch({
            type: CLEAR_POPUP_TYPE
        })
    }

    return (
        <PopupTypeContext.Provider value={{
            type: state.type,
            setPopupType,
            clearPopupType
        }}>
            { props.children }
        </PopupTypeContext.Provider>
    )
}

export default PopupTypeState
