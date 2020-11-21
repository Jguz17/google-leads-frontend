import React, { useReducer } from 'react'
import AuthContext from '../auth/authContext'
import authReducer from '../auth/authReducer'

import {
    EXPORT_SUCCESS,
    EXPORT_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const UserPlacesState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    
    
    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default UserPlacesState