import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../media/magnetic.png'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import UserPlacesContext from '../../context/userPlaces/userPlacesContext'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
  navbar: {
      backgroundColor: '#fff',
      // padding: '.5rem 0'
  },
  navbarWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const authContext = useContext(AuthContext)
  const userPlacesContext = useContext(UserPlacesContext)

  const { isAuthenticated, logout, user } = authContext
  const { clearPlaces } = userPlacesContext

  const onLogout = () => {
    logout()
    clearPlaces()
  }

  const authLinks = (
    <Fragment>
      <li style={{
        color: '#000',
        textDecoration: 'none',
        fontFamily: 'roboto-light'
      }}>Welcome, { user ? user.name : null}</li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/myplaces'>My Places</Link>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>Logout
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/register'>Signup</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  )

  return (
      <div>
        <Grid item container>
          <AppBar className={classes.navbar} position="static">
            <Toolbar className={classes.root}>
              <Grid item xs={1}/>
              <Grid item xs={10}>
                <div className={classes.navbarWrapper}>
                  <img style={{height: '40px', paddingRight: '1rem'}} src={logo} alt='Google Leads logo'/> 
                  <h1 id='page-title' style={{color: '#000', flexGrow: '1'}}>Google Leads</h1>
                  <div>
                    <ul className='navlinks'>
                      { localStorage.token ? authLinks : guestLinks}
                    </ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={1}/>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
  );
}