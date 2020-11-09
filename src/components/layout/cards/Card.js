import React, { useContext } from 'react'

const Card = (props) => {
    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    return (
            <div className='card'>
                <h1 className='card-h1' style={{
                    color: colors[Math.floor(Math.random() * (4 - 0))],
                    paddingBottom: props.place.name.length >= 25 ? '0' : '1.75rem'
                    // Reserved
                }}>{props.place.name}</h1>
                <hr/>
                <div className='place-content-container'>
                    {props.place.formatted_address ? <p>{props.place.formatted_address}</p> : <p style={{color: '#A7A7A7'}}>No address available</p>}
                    {props.place.formatted_phone_number ? <p>{props.place.formatted_phone_number}</p> : <p style={{color: '#A7A7A7'}}>No phone number available</p>}
                    {props.place.website ? <a href={props.place.website}>Go to website</a> : <p style={{color: '#A7A7A7'}}>No website available</p>}
                </div>
            </div>
    )
}

export default Card
