import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AlertContext from '../../../context/alerts/alertContext'
import AuthContext from '../../../context/auth/authContext'
import Alerts from '../../layout/Alerts'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  
  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenticated } = authContext

  // useEffect(() => {
    if (localStorage.token) {
      props.history.push('/home')
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  // }, [error, setAlert, props.history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {
    name,
    email,
    password,
    password2
  } = user

  const classes = useStyles();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if ( password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({
        name,
        email,
        password
      })
      props.history.push('/home')
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            minLength='6'
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            minLength='6'
            onChange={handleChange}
          />
          <Alerts/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Register