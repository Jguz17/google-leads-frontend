import React, { useReducer } from 'react'
import UserLocationContext from './userLocationContext'
import userLocationReducer from './userLocationReducer'

import {
    GET_USER_LOCATION,
    SET_USER_GEOLOCATION,
    GET_PLACES_INFORMATION,
    CLEAR_PLACES,
    SET_NEXT_PAGE_TOKEN,
    SET_CURRENT_PAGE
} from '../types'
import { render } from '@testing-library/react'

const UserLocationState = props => {
    const initialState = {
        userAddress: '',
        userGeolocation: {
            lat: '',
            lng: ''
        },
        places: [],
        pageTokens: [''],
        currentPage: 0
    }

    const [state, dispatch] = useReducer(userLocationReducer, initialState)

    const API_KEY = 'AIzaSyBSoo1JXXAtBhXQbkxDVhYGxUJdAwBOPk4'

    // Get user address
    const getAddress = (text) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${text}&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data => {
            console.log(data)
            dispatch({
                type: GET_USER_LOCATION,
                payload: data.results[0].formatted_address
            })
            let placeid = data.results[0].place_id
            fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result.geometry.location)
                setUserGeolocation(data.result.geometry.location)
                getPlacesInformation(data.result.geometry.location)
            })
        }))
    }

    const setUserGeolocation = (location) => {
        dispatch({
            type: SET_USER_GEOLOCATION,
            payload: location
        })
    }

    const getPlacesInformation = (location) => {
        clearPlaces()
        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=1500&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            if (data.next_page_token) {
                setNextPageToken(data.next_page_token)
            }

            data.results.map(place => {
                fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&key=${API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data.result)
                    dispatch({
                        type: GET_PLACES_INFORMATION,
                        payload: data.result
                    })
                })
            })

            setNextPage()
        })
    }

    const clearPlaces = () => {
        dispatch({
            type: CLEAR_PLACES
        })
    }

    const setNextPageToken = (token) => {
        // console.log(location)

        dispatch({
            type: SET_NEXT_PAGE_TOKEN,
            payload: token
        })
    }

    const handleClick = () => {
        clearPlaces()
        setNextPage()

        fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${state.userGeolocation.lat},${state.userGeolocation.lng}&radius=1500&key=${API_KEY}&pagetoken=${state.pageTokens[state.currentPage]}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            if (data.next_page_token) {
                setNextPageToken(data.next_page_token)
            }

            data.results.map(place => {
                fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${place.place_id}&key=${API_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data.result)
                    dispatch({
                        type: GET_PLACES_INFORMATION,
                        payload: data.result
                    })
                })
            })
        }) 
    }

    const setNextPage = () => {
        dispatch({
            type: SET_CURRENT_PAGE
        })
    }

    return (
        <UserLocationContext.Provider value={{
            userAddress: state.userAddress,
            places: state.places,
            pageTokens: state.pageTokens,
            currentPage: state.currentPage,
            getAddress,
            getPlacesInformation,
            handleClick
        }}>
            {props.children}
        </UserLocationContext.Provider>
    )
}

export default UserLocationState
