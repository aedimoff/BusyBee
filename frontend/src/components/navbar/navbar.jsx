import React from "react";
import "./navbar.scss";
import logo1 from "../../assets/runner.png";
import { FaGithub } from 'react-icons/fa';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.getLinks = this.getLinks.bind(this);
    this.getName = this.getName.bind(this);
  }

  getName() {
    if (this.props.session.user) {
      return this.props.session.user.name
    } else {
      return this.props.session.user.name
    }
  };


  getLinks() {
    const { openModal } = this.props;
    if (this.props.loggedin)  {
      return (
        <div className="navbar2">
          <div className="logo-container">
            <img className="top-logo" src={logo1} alt="runner logo"/>
            <h1 className="map-header2">Errant Errands</h1>
          </div>
          <div className="nav-greeting">
            <a href="https://github.com/aedimoff/ErrantErrands/wiki" target="_blank"
            className="nav-icons"><FaGithub size={28}/></a>
            <div className="user-greeting">
              Hello, {this.getName()}!
            </div>
            <div className="nav-logout" onClick={this.props.logout}>
              Logout
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="logo-container">
            <img className="top-logo" src={logo1} alt="runner logo"/>
            <h1 className="map-header">Errant Errands</h1>
          </div>
          <div className="login-signup">
            <div className="login-btn" onClick={() => openModal("login")}>Log in</div>
            <div className="signup-btn" onClick={() => openModal("signup")}>Sign up</div>
          </div>
        </div>
      );
    }
  };


  render() {
    return (
      <nav className="navbar-container">
        {this.getLinks()}
      </nav>
    );
  };
};

export default NavBar;


