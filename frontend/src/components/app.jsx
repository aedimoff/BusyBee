import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_container';
import Home from './main/home';
import Splash from './main/splash';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import Modal from './modal/modal';
import { Route, Redirect } from 'react-router-dom';
import Map from './map/map';
import './app1.scss';
require('dotenv').config()



const App = () => (
    <div className="App">
      <Modal />
      <header className="header">
        <Route path="/" component={NavBarContainer}></Route>
      </header>
      <div className="map-div">
        {Map()}
      </div>
      <Switch className="switch">
          <ProtectedRoute exact path="/home" component={Home} />
          <AuthRoute exact path="/" component={Splash} />
          <Redirect to="/"/>
      </Switch>
      <footer>
          Copyright &copy; 2021 a DreamTeam production tm
      </footer>
    </div>
);


export default App;
