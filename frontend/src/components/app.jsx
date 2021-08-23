import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/nav_container';
import Home from './main/home';
import Modal from './modal/modal';
import { Route, Redirect } from 'react-router-dom';
import SplashContainer from './main/splash_container';
import './app1.scss';
require('dotenv').config()



const App = () => {
    React.useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify());
    });
    
  return (
    <div className="App">
      <Modal />
      <header className="header">
        <Route path="/" component={NavBarContainer}></Route>
      </header>
      <Switch className="switch">
          <ProtectedRoute exact path="/home" component={Home} />
          <AuthRoute exact path="/" component={SplashContainer} />
          <Redirect to="/"/>
      </Switch>
      <footer>
          Copyright &copy; 2021 A DreamTeam Production
      </footer>
    </div>
  )
  };


export default App;
