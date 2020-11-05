import '../App.css';
import { Grid } from '@material-ui/core'
import Home from '../components/pages/Home'
import Navbar from '../components/layout/Navbar'
import UserLocationState from '../context/userLocation/UserLocationState'

function App() {
  return (
        <div className="App">
          <UserLocationState>
            <Grid container direction='column'>
              <Grid item xs={12}>
                <Navbar/>
              </Grid>
              <Grid container item direction='row'>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                  <Home/>
                </Grid>
                <Grid item xs={1}/>
              </Grid>
            </Grid>
          </UserLocationState>
        </div>
  );
}

export default App;
