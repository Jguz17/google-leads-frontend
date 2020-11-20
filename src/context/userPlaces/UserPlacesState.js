import React, { useReducer } from 'react'
import  { v4 as uuidv4} from 'uuid'
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
} from '../types'

const UserPlacesState = (props) => {
    const initialState = {
        places: [
            {
                id: 1,
                name: 'McBronalds',
                phone: '1110001234',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 2,
                name: 'Fried Chiken Shack',
                phone: '7730091122',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 3,
                name: 'Taco Land',
                phone: '3128831122',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 4,
                name: 'Harry\'s Chicken',
                phone: '8888888888',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 5,
                name: 'Seafood Restaurant',
                phone: '9999999999',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 6,
                name: 'Burger Queen',
                phone: '0000005678',
                address: '123 north fake ave, fake city, fake state'
            },
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(userPlacesReducer, initialState)

    const createPlace = (place) => {
        place.id = uuidv4()
        dispatch({
            type: CREATE_PLACE,
            payload: place
        })
    }

    const deletePlace = (id) => {
        dispatch({
            type: DELETE_PLACE,
            payload: id
        })
    }

    const updatePlace = (place) => {
        dispatch({
            type: UPDATE_PLACE,
            payload: place
        })
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
    
    return (
        <UserPlacesContext.Provider value={{
            places: state.places,
            current: state.current,
            filtered: state.filtered,
            createPlace,
            deletePlace,
            setCurrent,
            deleteCurrent,
            updatePlace,
            filterPlaces,
            clearFilteredPlaces
        }}>
            {props.children}
        </UserPlacesContext.Provider>
    )
}

export default UserPlacesState
