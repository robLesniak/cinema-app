import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/repertoire" />;
    }
    return (
      <div className="container" style={{ alignItems: "center" }}>
        <div className="landing">
          <div className="light-overlay landing-inner text-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4 className="display-4 mb-4">Welcome to our page</h4>
                  <img
                    src={require("../../images/cinema.svg.png")}
                    alt=""
                    style={{ height: "130px", width: "400px" }}
                  />
                  <p className="lead">
                    Create your account to get full experience of our
                    application
                  </p>
                  <hr />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-light mr-2"
                    style={{
                      backgroundColor: "#7070EF",
                      border: "none",
                      fontWeight: "bold"
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-lg btn-outline-light mr-2"
                    style={{
                      backgroundColor: "#7070EF",
                      border: "none",
                      fontWeight: "bold"
                    }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Landing);
