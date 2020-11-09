import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import Search from '../layout/Search'
import UserLocationContext from '../../context/userLocation/userLocationContext'
import Card from '../layout/cards/Card'

const Home = () => {

    const userLocationContext = useContext(UserLocationContext)

    const { places, currentPage, handleClick } = userLocationContext

    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    return (
            <div>
                <Grid item container direction='row'>
                    <Grid item xs={12}> 
                        <Search/>
                    </Grid>
                    <Grid item xs={12}>
                        {currentPage >= 2 && currentPage <= 3 ? <button>Back</button> : null}
                        { currentPage >= 1 && currentPage < 3 ? <button onClick={handleClick}>Next</button> : null }
                    </Grid>
                    {places.length > 1 ? 
                            <Grid container item xs={12} style={{justifyContent: 'space-around'}}>

                            {places.map(place => {
                                return <Card place={place}/>
                            })}

                            </Grid>
                         : null}
                </Grid>
            </div>        
    )
}


export default Home