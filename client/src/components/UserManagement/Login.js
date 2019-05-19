import React, { Component } from "react";

import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    passwordColor: "",
    emailColor: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
    //  if (this.props.authError) {
    //    this.props.history.push("/repertoire");
    //}
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFocusPassword = () => {
    this.setState({ passwordColor: "#d1d1fa" });
  };

  handleFocusEmail = () => {
    this.setState({ emailColor: "#d1d1fa" });
  };

  handleBlurPassword = () => {
    this.setState({ passwordColor: "#FFFFFF" });
  };

  handleBlurEmail = () => {
    this.setState({ emailColor: "#FFFFFF" });
  };

  render() {
    const { email, password } = this.state;
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/repertoire" />;
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
              {authError ? (
                <h5 style={{ color: "red", fontWeight: "bold" }}>
                  {authError}
                </h5>
              ) : (
                <h3 className="text-center mb-4">Login</h3>
              )}
              <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    placeholder="email address"
                    name="email"
                    value={email}
                    type="email"
                    onChange={this.handleChange}
                    style={{ backgroundColor: this.state.emailColor }}
                    onFocus={this.handleFocusEmail}
                    onBlur={this.handleBlurEmail}
                  />
                </div>
                <div className="form-group has-success">
                  <input
                    className="form-control input-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={this.handleChange}
                    style={{ backgroundColor: this.state.passwordColor }}
                    onFocus={this.handleFocusPassword}
                    onBlur={this.handleBlurPassword}
                  />
                </div>
                <input
                  className="btn btn-lg btn-primary btn-block"
                  value="Log me in"
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
