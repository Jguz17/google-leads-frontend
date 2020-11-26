import React, { useReducer } from 'react'
import axios from 'axios'
import UserPlacesContext from '../userPlaces/userPlacesContext'
import userPlacesReducer from '../userPlaces/userPlacesReducer'

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
    CLEAR_PLACES
} from '../types'

const UserPlacesState = (props) => {
    const initialState = {
        places: null,
        current: null,
        filtered: null,
        error: null
    }

    const [state, dispatch] = useReducer(userPlacesReducer, initialState)

    const getPlaces = async () => {
        try {
            const res = await axios.get('https://google-leads-backend.herokuapp.com/api/places')
            dispatch({
                type: GET_PLACES,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: PLACE_ERROR,
                payload: error.response.message
            })
        }    
    }

    const createPlace = async (place) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('https://google-leads-backend.herokuapp.com/api/places', place, config)
            dispatch({
                type: CREATE_PLACE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: PLACE_ERROR,
                payload: error.response.message
            })
        }
    }

    const deletePlace = async (id) => {
        try {
            axios.delete(`https://google-leads-backend.herokuapp.com/api/places/${id}`)
            dispatch({
                type: DELETE_PLACE,
                payload: id
            })
        } catch (error) {
            dispatch({
                type: PLACE_ERROR,
                payload: error.response.message
            })
        }
    }

    const updatePlace = async (place) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`https://google-leads-backend.herokuapp.com/api/places/${place._id}`, place, config)
            dispatch({
                type: UPDATE_PLACE,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: PLACE_ERROR,
                payload: error
            })
        }
    }

    const filterPlaces = (text) => {
        dispatch({
            type: FILTER_PLACES,
            payload: text
        })
    }

    const clearFilteredPlaces = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }

    const setCurrent = (place) => {
        dispatch({
            type: SET_CURRENT,
            payload: place
        })
    }

    const deleteCurrent = () => {
        dispatch({
            type: DELETE_CURRENT
        })
    }

    const clearPlaces = () => {
        dispatch({
            type: CLEAR_PLACES
        })
    }
    
    return (
        <UserPlacesContext.Provider value={{
            places: state.places,
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            createPlace,
            deletePlace,
            setCurrent,
            deleteCurrent,
            updatePlace,
            filterPlaces,
            clearFilteredPlaces,
            getPlaces,
            clearPlaces
        }}>
            {props.children}
        </UserPlacesContext.Provider>
    )
}

export default UserPlacesState
