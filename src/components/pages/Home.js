import React, { useContext } from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Navbar from '../layout/Navbar'
import Search from '../layout/Search'
import UserLocationContext from '../../context/userLocation/userLocationContext'
import Card from '../layout/cards/Card'
import Button from '@material-ui/core/Button';
import RadiusInput from '../layout/RadiusInput'

const Home = () => {

    const userLocationContext = useContext(UserLocationContext)

    const { userAddress, places, currentPage, next, back } = userLocationContext

    const colors = ['#0073BD', '#FF6B6B', '#DC901C', '#00B776']

    return (
            <div>
                <Grid item container direction='row'>
                    <Grid item xs={12}> 
                        <Search/>
                    </Grid>
                    <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}} >
                       <RadiusInput/>
                    </Grid>
                    <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}} >
                        <Button id='submit-button' variant='contained'>Submit</Button>
                    </Grid>
                    <Grid item xs={12} style={{justifyContent: 'center', display: 'flex'}}>
                        { userAddress.length > 1 ? <p id='user-address'>Results near {userAddress}</p> : null }
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', "justifyContent": 'center', margin: '0 0 2rem' }}>
                        { currentPage >= 2 && currentPage <= 3 ? <Button variant='contained' className='page-buttons' id='previous' onClick={back}>Previous</Button> : null }
                        { currentPage >= 1 && currentPage < 3 ? <Button variant='contained' className='page-buttons' id='next' onClick={next}>Next</Button> : null }
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