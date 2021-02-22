import React, { useReducer } from 'react'
import AlertContext from '../alerts/alertContext'
import alertReducer from '../alerts/alertReducer'
import  { v4 as uuidv4} from 'uuid'

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (message, type, timeout=2000) => {
        const id = uuidv4()
        dispatch({
            type: SET_ALERT,
            payload: { id, message, type}
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
            payload: id
        }), timeout)
    }
    
    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState