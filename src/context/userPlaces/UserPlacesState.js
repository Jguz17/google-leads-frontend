import React, { useReducer } from 'react'
import uuid from 'uuid'
import UserPlacesContext from '../userPlaces/userPlacesContext'
import userPlacesReducer from '../userPlaces/userPlacesReducer'

import {
    CREATE_PLACE,
    DELETE_PLACE,
    SET_CURRENT,
    DELETE_CURRENT,
    FILTER_PLACES,
    CLEAR_FILTER,
} from '../types'

const UserPlacesState = (props) => {
    const initialState = {
        places: [
            {
                id: 1,
                name: 'McBronalds',
                phone: '1110001234',
                email: 'mc@gmail.com',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 2,
                name: 'Fried Chiken Shack',
                phone: '7730091122',
                email: 'shack@gmail.com',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 3,
                name: 'Taco Land',
                phone: '3128831122',
                email: 'tacos@gmail.com',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 4,
                name: 'Harry\'s Chicken',
                phone: '8888888888',
                email: 'harryschicken@gmail.com',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 5,
                name: 'Seafood Restaurant',
                phone: '9999999999',
                email: 'seafood@gmail.com',
                address: '123 fake st, fake city, fake state'
            },
            {
                id: 6,
                name: 'Burger Queen',
                phone: '0000005678',
                email: 'burgerqueen@gmail.com',
                address: '123 north fake ave, fake city, fake state'
            },
        ]
    }

    const [state, dispatch] = useReducer(userPlacesReducer, initialState)
    
    return (
        <UserPlacesContext.Provider value={{
            places: state.places
        }}>
            {props.children}
        </UserPlacesContext.Provider>
    )
}

export default UserPlacesState
