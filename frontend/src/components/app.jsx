import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_container';

import Splash from './main/splash';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import Modal from './modal/modal';
import { Route, Redirect } from 'react-router-dom';
import Map from './map/map'
require('dotenv').config()



const App = () => (
    <div className="App">
      <Modal />
      <header>
        <Route path="/" component={NavBarContainer}></Route>
        <div>
          {Map()}
        </div>
      </header>
      <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/register" component={SignupFormContainer} />
          <Redirect to="/"/>
      </Switch>
      <footer>
          Copyright &copy; 2021 a DreamTeam production tm
      </footer>
    </div>
);


export default App;