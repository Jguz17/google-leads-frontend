import React, { Fragment, useContext } from 'react'
import { Grid } from '@material-ui/core'
import UserLocationContext from '../../context/userLocation/userLocationContext'

const Search = () => {

    const userLocationContext = useContext(UserLocationContext)

    const { userAddress, getAddress } = userLocationContext

    const handleSubmit = (e) => {
        e.preventDefault()
        const address = document.querySelector('#search').value
        getAddress(address)
    }

    return (
            <Fragment>
                <form onSubmit={handleSubmit}>
                    <input id='search' placeholder='Enter an address here' style={{width: '100%'}}/>
                </form>
            </Fragment>
    )
}

export default Search
