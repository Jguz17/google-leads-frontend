import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import Search from '../layout/Search'
import UserLocationContext from '../../context/userLocation/userLocationContext'

const Home = () => {

    const userLocationContext = useContext(UserLocationContext)

    const { places } = userLocationContext

    return (
            <div>
                <Grid item container direction='row'>
                    <Grid item xs={12}> 
                        <Search/>
                    </Grid>
                    {places.length > 1 ? 
                            <Grid container item xs={12} style={{justifyContent: 'space-around'}}>

                            {places.map(place => {
                                console.log(place)
                                return <div className='card'>
                                    <h1>{place.name}</h1>
                                    {place.formatted_address ? <p>{place.formatted_address}</p> : <p>No address available</p>}
                                    {place.formatted_phone_number ? <p>{place.formatted_phone_number}</p> : <p>No phone number available</p>}
                                    {place.website ? <a href={place.website}>To website</a> : <p>No website available</p>}
                                </div>
                            })}

                            </Grid>
                         : null}
                </Grid>
            </div>        
    )
}


export default Home