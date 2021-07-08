import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_container';
import Home from './main/home';
import Splash from './main/splash';
import Modal from './modal/modal';
import { Route, Redirect } from 'react-router-dom';
import Directions from './map/directions';
// import MapContainer from './map/map_container';
import './app1.scss';
require('dotenv').config()



const App = () => {
    React.useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify());
    });
    
  return (
    <div className="App">
      <Modal />
      {/* <Home /> */}
      <header className="header">
        <Route path="/" component={NavBarContainer}></Route>
      </header>
      <Directions></Directions>
      <Switch className="switch">
          <ProtectedRoute exact path="/home" component={Home} />
          <AuthRoute exact path="/" component={Splash} />
          <Redirect to="/"/>
      </Switch>
      <footer>
          Copyright &copy; 2021 A DreamTeam Production
      </footer>
    </div>
  )
  };


export default App;
