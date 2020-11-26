import React, { useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import UserPlacesContext from '../../../context/userPlaces/userPlacesContext'
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'
import PopupTypeContext from '../../../context/popupType/popupTypeContext'
import UserPlaceItem from './UserPlaceItem'
import Button from '@material-ui/core/Button';
import UserPlacesFilter from '../../layout/UserPlacesFilter'
import Spinner from '../../layout/spinner/Spinner'

const UserPlaces = () => {

    const userPlacesContext = useContext(UserPlacesContext)
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)
    const popupTypeContext = useContext(PopupTypeContext)

    const { places, filtered, getPlaces, loading } = userPlacesContext
    const { turnActivatedStateOn } = createNewPlacePopUpContext
    const { setPopupType } = popupTypeContext

    useEffect(() => {
        getPlaces()
        // eslint-disable-next-line
    }, [])

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
            {places !== null && places.length === 0 && !loading ? <h1>No places to show</h1> : null}
            {places !== null && !loading ? (
                <Grid container item xs={12} style={{justifyContent: 'space-around'}}>
                    {filtered !== null ? filtered.map(place => {
                        return <UserPlaceItem key={place._id} place={place}/>
                    }) : places.map(place => {
                        return <UserPlaceItem key={place._id} place={place}/>
                    })}
                </Grid>
            ) : <Spinner/>}
        </Grid>
    )
}

export default UserPlaces