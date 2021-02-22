import React, { useContext, useRef, useEffect } from 'react'
import UserPlacesContext from '../../context/userPlaces/userPlacesContext'

const UserPlacesFilter = () => {
    const userPlacesContext = useContext(UserPlacesContext)

    const { filterPlaces, clearFilteredPlaces, filtered } = userPlacesContext

    const text = useRef('')

    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })

    const onChange = (e) => {
        if (text.current.value !== '') {
            filterPlaces(e.target.value)
        } else {
            clearFilteredPlaces()
        }
    }
    return (
        <div className='user-places-filter-container' style={{width: '100%'}}>
            <form onSubmit={(e) => e.preventDefault()}>
                <input ref={text} id='filter' onChange={onChange} placeholder='Filter by business name'/>
            </form>
        </div>
    )
}

export default UserPlacesFilter
