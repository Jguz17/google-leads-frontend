import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import UserPlacesContext from '../../../context/userPlaces/userPlacesContext'
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'
import PopupTypeContext from '../../../context/popupType/popupTypeContext'

const UserPlaceItem = (props) => {

    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    const userPlacesContext = useContext(UserPlacesContext)
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)
    const popupTypeContext = useContext(PopupTypeContext)

    const { deletePlace, setCurrent, deleteCurrent } = userPlacesContext
    const { turnActivatedStateOn } = createNewPlacePopUpContext
    const { setPopupType } = popupTypeContext

    const { id } = props.place

    const handleDelete = (e) => {
        deletePlace(id)
        deleteCurrent()
    }

    const handleClick = () => {
        setCurrent(props.place)
        turnActivatedStateOn()
        setPopupType('UPDATE')
    }

    return (
        <div className='card'>
                <h1 className='card-h1' style={{
                    color: colors[Math.floor(Math.random() * (4 - 0))],
                    paddingBottom: props.place.name.length >= 25 ? '0' : '1.75rem'
                }}>{props.place.name}</h1>
                <hr/>
                <div className='user-buttons-container' style={{ marginTop: '.5rem' }}>
                    <Button variant='contained' className='page-buttons' id='update' onClick={handleClick}>Update</Button>
                    <Button variant='contained' onClick={handleDelete} className='page-buttons' id='delete'>Delete</Button>
                </div>
                <div className='place-content-container'>
                    {props.place.address ? <p>{props.place.address}</p> : <p style={{color: '#A7A7A7'}}>No address available</p>}
                    {props.place.phone ? <p>{props.place.phone}</p> : <p style={{color: '#A7A7A7'}}>No phone number available</p>}
                    {props.place.website ? <a href={props.place.website}>Go to website</a> : <p style={{color: '#A7A7A7'}}>No website available</p>}
                </div>
            </div>
    )
}

export default UserPlaceItem
