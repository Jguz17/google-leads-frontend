import React, { useContext, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'
import UserPlacesContext from '../../../context/userPlaces/userPlacesContext'
import PopupTypeContext from '../../../context/popupType/popupTypeContext'

const PlaceForm = () => {
    const [place, setPlace] = useState({
        name: '',
        phone: '',
        website: ''
    })

    const { name, phone, website, address } = place

    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)
    const userPlacesContext = useContext(UserPlacesContext)
    const popupTypeContext = useContext(PopupTypeContext)

    const { turnActivatedStateOff } = createNewPlacePopUpContext
    const { createPlace, deleteCurrent, current, updatePlace } = userPlacesContext
    const { clearPopupType } = popupTypeContext

    useEffect(() => {
        if (current !== null) {
            setPlace(current)
        } else {
            setPlace({
                name: '',
                phone: '',
                website: '',
                address: ''
            })
        }
    }, [userPlacesContext, current])

    const handleClick = () => {
        turnActivatedStateOff()
        clearPopupType()
        deleteCurrent()
        document.getElementsByTagName("BODY")[0].style.overflow = 'initial'
        document.getElementById('navbar-select').style.zIndex = '0'
    }

    const handleChange = (e) => {
        setPlace({
            ...place,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (current === null) {
            createPlace(place)
            setPlace({
                name: '',
                phone: '',
                website: ''
            })
            handleClick()
        } else {
            updatePlace(place)
            setPlace({
                name: '',
                phone: '',
                website: ''
            })
            handleClick()
        }
    }

    return (
        <div className='place-form-container' style={{ zIndex: '3', position: 'absolute'}}>
            <form onSubmit={onSubmit} className='place-form' style={{ width: '100%'}}>
                <input onChange={handleChange} name='name' value={name} className='place-form-inputs' style={{display: 'block' }} id='business-name-input' type='text' placeholder='Business Name'/>
                <input onChange={handleChange} name='address' value={address} className='place-form-inputs' style={{display: 'block' }} id='business-address-input' type='text' placeholder='Business Address'/>
                <input onChange={handleChange} name='phone' value={phone} className='place-form-inputs' style={{display: 'block' }} id='business-phone-input' type='text' placeholder='Business Phone'/>
                <input onChange={handleChange} name='website' value={website} className='place-form-inputs' style={{display: 'block' }} id='business-website-input' type='text' placeholder='Business Website'/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button id='create' type='submit' variant='contained'>{ current ? 'Update' : 'Create'}</Button>
                    <Button id='close' variant='contained' onClick={() => {handleClick()}}>Close</Button>
                </div>
            </form>
        </div>
    )
}

export default PlaceForm
