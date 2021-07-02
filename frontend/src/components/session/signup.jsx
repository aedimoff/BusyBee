import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import './_session.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      submitting: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleInput(type) {
    return (e) => {
        this.setState({ [type]: e.target.value })
    }
}

displayErrors() {
  if (!this.props.errors.length) {
      return null
  } else {
      return (
          <ul className="rendor-errors">
              {this.props.errors.map((error1, idx1) => {
                  return <li key={idx1}>{error1}</li>
              })}
          </ul>
      )
  }
}

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitting: true})
    this.props.signup(this.state)
      .then(() => this.props.closeModal())
  };

  render () {
    const { openModal } = this.props;
    return (
      <div className="signup-container">
        <div onClick={this.props.closeModal} className="close-x"><MdClose size={25}/></div>
        <div className="auth-title">
          <h2>Welcome to Busy Bee</h2>
        </div>
        <form className="signup-form-box" onSubmit={this.handleSubmit}>
        <br/>
          <div className="signup-form">
            <label>
              <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
              placeholder="Full name"
              />
            </label>
            <label>
              <input
              type="email"
              value={this.state.email}
              onChange={this.handleInput('email')}
              placeholder="Email"
              />
            </label>
            <label>
              <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
              />
            </label>
            <label>
              <input
              type="password"
              value={this.state.password2}
              onChange={this.handleInput('password2')}
              placeholder="Password"
              />
            </label>
            <div className="auth-btn" onClick={this.handleSubmit}>Sign Up</div>
            <div className="auth-footer">
                <h6>By continuing, you agree to Busy Bee's Terms of</h6>
                <h6>Service, Privacy policy.</h6>
            </div>
            <div className="already-member" onClick={() => openModal('login')}>
                Already a member? Log in</div>
          </div>
        </form>
      </div>

    );
  }
};

export default withRouter(Signup);