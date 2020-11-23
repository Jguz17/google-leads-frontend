import '../App.css';
// import { useContext } from 'react'
import { Grid } from '@material-ui/core'
import Home from '../components/pages/Home'
import Background from '../components/layout/Popup/Background'
import Welcome from '../components/pages/welcome/Welcome'
import UserPlaces from '../components/pages/userPlaces/UserPlaces'
import Navbar from '../components/layout/Navbar'
import Login from '../components/pages/auth/Login'
import Register from '../components/pages/auth/Register'

import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import UserLocationState from '../context/userLocation/UserLocationState'
import UserPlacesState from '../context/userPlaces/UserPlacesState'
import CreateNewPlacePopUpState from '../context/createNewPlacePopUp/CreateNewPlacePopUpState'
import PopupTypeState from '../context/popupType/PopupTypeState'
import AuthState from '../context/auth/AuthState'
import AlertState from '../context/alerts/AlertState'

const App = () => {

  return (
        <Router>
          <div className="App">
            <UserLocationState>
              <UserPlacesState>
                <CreateNewPlacePopUpState>
                  <PopupTypeState>
                    <AuthState>
                      <AlertState>
                        <Grid container direction='column'>
                          <Grid item xs={12}>
                            <Background/>
                          </Grid>
                          <Grid item xs={12} id='navbar-select'>
                            <Navbar/>
                          </Grid>
                          <Grid container item direction='row'>
                            <Grid item xs={1}/>
                            <Grid item xs={10}>
                              <Switch>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/home' component={Home}/>
                                <Route path='/myplaces' component={UserPlaces}/>
                                <Route path='/' component={Welcome}/>
                              </Switch>
                            </Grid>
                            <Grid item xs={1}/>
                          </Grid>
                        </Grid>
                      </AlertState>
                    </AuthState>
                  </PopupTypeState>
                </CreateNewPlacePopUpState>
              </UserPlacesState>
            </UserLocationState>
          </div>
        </Router>
  );
}

export default App;