import React, { useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import UserPlacesContext from '../../../context/userPlaces/userPlacesContext'
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'
import PopupTypeContext from '../../../context/popupType/popupTypeContext'
import UserPlaceItem from './UserPlaceItem'
import Button from '@material-ui/core/Button';
import UserPlacesFilter from '../../layout/UserPlacesFilter'
import AuthContext from '../../../context/auth/authContext'

const UserPlaces = () => {

    const userPlacesContext = useContext(UserPlacesContext)
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)
    const popupTypeContext = useContext(PopupTypeContext)
    const authContext = useContext(AuthContext)

    const { places, filtered } = userPlacesContext
    const { turnActivatedStateOn } = createNewPlacePopUpContext
    const { setPopupType } = popupTypeContext
    const { loadUser } = authContext

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    return (
        <Grid container item>
            <Grid container item xs={12}>
                <UserPlacesFilter/>
            </Grid>
            <Grid container item xs={12} style={{ justifyContent: 'center', padding: '1rem 1rem 2rem 0' }}>
                <Button onClick={() => {
                    turnActivatedStateOn()
                    setPopupType('CREATE')
                }} id='user-create-place' variant='contained'>Create New Place</Button>
            </Grid>
            <Grid container item xs={12} style={{justifyContent: 'space-around'}}>
                {filtered !== null ? filtered.map(place => {
                    return <UserPlaceItem key={place.id} place={place}/>
                }) : places.map(place => {
                    return <UserPlaceItem key={place.id} place={place}/>
                })}
            </Grid>
        </Grid>
    )
}

export default UserPlaces