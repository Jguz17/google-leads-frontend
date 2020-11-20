import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'

const PlaceForm = () => {
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)

    const { turnActivatedStateOff } = createNewPlacePopUpContext

    const handleClick = () => {
        turnActivatedStateOff()
        document.getElementsByTagName("BODY")[0].style.overflow = 'initial'
        document.getElementById('navbar-select').style.zIndex = '0'
    }

    return (
        <div className='place-form-container' style={{ zIndex: '3', position: 'absolute'}}>
            <form className='place-form' style={{ width: '100%'}}>
                <input className='place-form-inputs' style={{display: 'block' }} id='business-name-input' type='text' placeholder='Business Name'/>
                <input className='place-form-inputs' style={{display: 'block' }} id='business-email-input' type='text' placeholder='Business Email'/>
                <input className='place-form-inputs' style={{display: 'block' }} id='business-phone-input' type='text' placeholder='Business Phone'/>
                <input className='place-form-inputs' style={{display: 'block' }} id='business-website-input' type='text' placeholder='Business Website'/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button id='create' variant='contained'>Create</Button>
                    <Button id='close' variant='contained' onClick={() => {handleClick()}}>Close</Button>
                </div>
            </form>
        </div>
    )
}

export default PlaceForm
