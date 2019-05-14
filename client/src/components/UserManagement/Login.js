import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    inputBackgroundColor: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
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
    const { email, password } = this.state;
    return (
      <div class="container-fluid bg-light py-3">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body">
              <h3 class="text-center mb-4">Login</h3>
              <form className="form-group" onSubmit={this.handleSubmit}>
                <div class="form-group has-success">
                  <input
                    class="form-control input-lg"
                    placeholder="email address"
                    name="email"
                    value={email}
                    type="email"
                    onChange={this.handleChange}
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    onFocus={this.handleFocus}
                  />
                </div>
                <div class="form-group has-success">
                  <input
                    class="form-control input-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={this.handleChange}
                    style={{ backgroundColor: this.state.inputBackgroundColor }}
                    onFocus={this.handleFocus}
                  />
                </div>
                <input
                  class="btn btn-lg btn-primary btn-block"
                  value="Log me in"
                  type="submit"
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
    signIn: extUser => dispatch(signIn(extUser))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
