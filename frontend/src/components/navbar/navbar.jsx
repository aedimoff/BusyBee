import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // showModal() {
  //   state = {
  //     show: false,
  //   };
  //   showModal = (e) => {
  //     this.setState({ show: true });
  //   };
  // }

  render() {
    const { openModal, closeModal } = this.props;

    const display = this.props.currentUser ? (
      <div className="nav-greeting">
          <div className="user-greeting">Hello, {this.props.currentUser.name}!</div>
        <div className="nav-logout" onClick={this.props.logout}>Logout</div>
      </div>
    ) : (
      <div className="login-signup">
        <div className="login-btn" onClick={() => openModal('login')}>Log in</div>
        <div className="signup-btn" onClick={() => openModal('signup')}>Sign up</div>
      </div>
    );

    return (
      <nav className="navbar">
        {display}
      </nav>
    )
  };
};

export default NavBar;