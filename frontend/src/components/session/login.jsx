import React from "react";
import { withRouter } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./_session.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.demoSubmit = this.demoSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = {
      email: 'demo@gmail.com',
      password: '123123'
  }
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      this.props.closeModal();
      this.props.history.push("/home");
    });
  }

  demoSubmit() {
    this.props.login(this.demo).then(() => {
      this.props.closeModal();
      this.props.history.push("/home");
    });
  }

  displayErrors() {
    if (!this.props.errors.length) {
      return null;
    } else {
      return (
        <ul className="rendor-errors">
          {this.props.errors.map((error1, idx1) => {
            return <li key={idx1}>{error1}</li>;
          })}
        </ul>
      );
    }
  }

  render() {
    const { openModal, closeModal } = this.props;

    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">
          <MdClose size={25} />
        </div>
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <div className="auth-title">
            <h2>Welcome to Busy Bee</h2>
          </div>
          {this.displayErrors()}
          <div className="login-form">
            <div className="session-form-inputs">
              <label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInput("email")}
                  placeholder="Email"
                />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                  placeholder="Password"
                />
              </label>
              <div className="auth-btn" onClick={this.handleSubmit}>Log in</div>
              <p className="or">OR</p>
              <div onClick={this.demoSubmit} className="demo-user">
                  Continue as Demo User
              </div>
              <div className="auth-footer">
                <h6>By continuing, you agree to Busy Bee's Terms of</h6>
                <h6>Service, Privacy policy.</h6>
              </div>
              <div className="need-account" onClick={() => openModal("signup")}>
                Not on Busy Bee yet? Sign up
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
