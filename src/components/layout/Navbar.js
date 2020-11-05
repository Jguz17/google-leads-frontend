import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../media/magnetic.png'
import { Grid } from '@material-ui/core'

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

  return (
      <div>
        <Grid item container>
          <AppBar className={classes.navbar} position="static">
            <Toolbar className={classes.root}>
              <Grid item xs={1}/>
              <Grid item xs={10}>
                <div className={classes.navbarWrapper}>
                  <img style={{height: '40px', paddingRight: '1rem'}} src={logo}/> 
                  <h1 id='page-title' style={{color: '#000'}}>Google Leads</h1>
                </div>
              </Grid>
              <Grid item xs={1}/>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
  );
}