import React, { useContext, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Search from '../layout/Search'
import UserLocationContext from '../../context/userLocation/userLocationContext'
import Card from '../layout/cards/Card'
import Button from '@material-ui/core/Button';
import AuthContext from '../../context/auth/authContext'

const Home = () => {

    const userLocationContext = useContext(UserLocationContext)
    const authContext = useContext(AuthContext)

    const { getAddress, userAddress, places, currentPage, next, back } = userLocationContext
    const { loadUser } = authContext

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [])

    return (
            <div>
                <Grid item container direction='row'>
                    <Grid item xs={12}> 
                        <Search/>
                    </Grid>
                    <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}} >
                        <Button onClick={() => {
                            const type = document.querySelector('#dropdown').value
                            const address = document.querySelector('#search').value
                            
                            getAddress(address, type)
                        }} id='submit-button' variant='contained'>Submit</Button>
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