import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    const { openModal } = this.props;
    if (this.props.loggedin)  {
      console.log(this.props);
      return (
        <div className="navbar">
          <div className="nav-greeting">
            <div className="user-greeting">
              Hello, {this.props.session.currentUser.name}!
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
          <div className="login-signup">
            <div className="login-btn" onClick={() => openModal("login")}>
              Log in
            </div>
            <div className="signup-btn" onClick={() => openModal("signup")}>
              Sign up
            </div>
          </div>
        </div>
      );
    }
  };


  render() {
    return (
      <nav className="navbar">
        {this.getLinks()}
      </nav>
    );
  }
}

export default NavBar;


