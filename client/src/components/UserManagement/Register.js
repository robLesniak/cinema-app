import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    inputBackgroundColor: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
    this.props.history.push("/login");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFocus = () => {
    this.setState({ inputBackgroundColor: "#d1d1fa" });
  };

  handleBlur = () => {
    this.setState({ backgroundColor: "#000000" });
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <div className="container-fluid bg-light py-3">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <div
                className="text-center "
                style={{ marginTop: "5", marginBottom: "5" }}
              >
                <img
                  src={require("../../images/cinema.svg.png")}
                  className="d-inline-block"
                  style={{
                    height: "50px",
                    width: "200px"
                  }}
                  alt=""
                />
              </div>
              <h3 className="text-center mb-2">Sign-up</h3>

              {/* <div class="alert alert-danger">
                  <a class="close font-weight-light" data-dismiss="alert" href="#">×</a>Password is too short.
                </div> */}
              <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    placeholder="Username"
                    name="username"
                    value={username}
                    type="username"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
                <div className="form-group has-error">
                  <input
                    className="form-control input-lg"
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    placeholder="E-mail Address"
                    value={email}
                    name="email"
                    type="text"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    type="password"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </div>
                <div className="checkbox">
                  <label>
                    <input name="terms" type="checkbox" />
                    &nbsp;I have read and agree to the{" "}
                    <Link to="">terms of service</Link>
                  </label>
                </div>
                <input
                  className="btn btn-lg btn-primary btn-block"
                  value="Sign Me Up"
                  type="submit"
                  style={{ backgroundColor: "#7070EF" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
