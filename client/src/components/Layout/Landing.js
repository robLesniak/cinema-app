import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../config/firebaseConfig";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      movie1: null,
      movie2: null,
      movie3: null
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("films")
      .doc("693BOuynSHrH2cAzy0pt")
      .get()
      .then(doc => this.setState({ movie1: doc.data() }));

    firebase
      .firestore()
      .collection("films")
      .doc("Q7JAdl9vKcBOIZLjR2QJ")
      .get()
      .then(doc => this.setState({ movie2: doc.data() }));

    firebase
      .firestore()
      .collection("films")
      .doc("gl2Qu89Jp5kZiAtJNqtf")
      .get()
      .then(doc => this.setState({ movie3: doc.data() }));
  }
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/repertoire" />;
    }

    return (
      <div className="container" style={{ alignItems: "center" }}>
        <div className="landing">
          <div className="light-overlay landing-inner text-dark">
            <div className="row">
              <div className="col-md-12 text-center ">
                <h4 className="display-4 mb-4">Welcome to our page</h4>
                <img
                  className="img-fluid"
                  src={require("../../images/cinema.svg.png")}
                  alt=""
                />
                <p className="lead">
                  Create your account to get full experience of our application
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
        <div className="container">
          <div
            className="row justify-content-md-center text-center"
            style={{ marginTop: "5px" }}
          >
            <div className="col col-lg-2">
              {this.state.movie1 == null ? (
                <div className="spinner-grow text-info" role="status" />
              ) : (
                <Link
                  to="/repertoire/CkRC39k4mtmzo7IonZsE/details"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
                    {this.state.movie1.title}
                  </h5>

                  <img
                    className="rounded"
                    src={this.state.movie1.image}
                    alt=""
                  />
                </Link>
              )}
            </div>
            <div
              className="col col-lg-2"
              style={{ marginRight: "40px", marginLeft: "40px" }}
            >
              {" "}
              {this.state.movie2 == null ? (
                <div className="spinner-grow text-info" role="status" />
              ) : (
                <Link
                  to="/repertoire/Diduq8NT4DpXBCjOsu2H/details"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 style={{ fontStyle: "italic" }}>
                    {this.state.movie2.title}
                  </h5>
                  <img
                    className="rounded"
                    src={this.state.movie2.image}
                    alt=""
                  />
                </Link>
              )}
            </div>
            <div className="col col-lg-2">
              {" "}
              {this.state.movie3 == null ? (
                <div className="spinner-grow text-info" role="status" />
              ) : (
                <Link
                  to="/repertoire/piUabYOks6Ivm2VRgDg6/details"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5 style={{ fontStyle: "italic" }}>
                    {this.state.movie3.title}
                  </h5>
                  <img
                    className="rounded"
                    src={this.state.movie3.image}
                    alt=""
                  />
                </Link>
              )}
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
