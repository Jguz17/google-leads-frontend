import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import UserPlacesContext from '../../context/userPlaces/userPlacesContext'
import UserPlaceItem from './UserPlaceItem'
import Button from '@material-ui/core/Button';

const UserPlaces = () => {

    const userPlacesContext = useContext(UserPlacesContext)

    const { places } = userPlacesContext

    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    return (
        <Grid container item>
            <Grid container item xs={12} style={{ justifyContent: 'center', padding: '1rem 1rem 2rem 0' }}>
                <Button id='user-create-place' variant='contained'>Create New Place</Button>
            </Grid>
            <Grid container item xs={12} style={{justifyContent: 'space-around'}}>
                {places.map(place => {
                    return <UserPlaceItem key={place.id} place={place}/>
                })}
            </Grid>
        </Grid>
    )
}

export default UserPlaces