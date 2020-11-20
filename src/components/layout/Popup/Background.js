import React, { useContext } from 'react'
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'
import PlaceForm from './PlaceForm'

const Background = () => {
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)

    const { activated } = createNewPlacePopUpContext

    if (!activated) {
        return null;
    } 

    document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
    document.getElementById('navbar-select').style.zIndex = '1'
    document.documentElement.scrollTop = 0

    return (
        <div>
            <div className='background' style={{ width: '100vw', height: '100vh', backgroundColor: 'black', position: 'absolute', zIndex: '2', opacity: '.5'}}>
            </div>
            <PlaceForm/>
        </div>
    )
}

export default Background
