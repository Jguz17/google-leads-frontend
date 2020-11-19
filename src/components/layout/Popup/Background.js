import React, { useContext } from 'react'
import CreateNewPlacePopUpContext from '../../../context/createNewPlacePopUp/createNewPlacePopUpContext'


const Background = () => {
    const createNewPlacePopUpContext = useContext(CreateNewPlacePopUpContext)

    const { activated } = createNewPlacePopUpContext

    if (!activated) {
        return null;
    } 

    document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
    document.getElementById('navbar-select').style.zIndex = '-1'

    return (
        <div className='background' style={{ width: '100vw', height: '100vh', backgroundColor: 'black', position: 'absolute', zIndex: '2', opacity: '.5'}}>
            
        </div>
    )
}

export default Background
