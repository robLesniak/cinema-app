import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const userIsNotAuthenticatedNav = (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav nav-pills mr-auto">
          <li className="nav-item nav-divider">
            <Link
              to="/repertoire"
              className="nav-link "
              style={{ fontSize: "20px" }}
            >
              <i className="fa fa-film" />
              &nbsp;Repertoire
            </Link>
          </li>
          <li className="nav-item nav-divider">
            <Link to="" className="nav-link" style={{ fontSize: "20px" }}>
              <i className="fa fa-money" />
              &nbsp;Price list
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link" style={{ fontSize: "20px" }}>
              About us&nbsp;
              <i className="fa fa-question-circle-o" />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-link "
              style={{ fontSize: "20px" }}
            >
              <button type="button" className="btn btn-lg btn-outline-light ">
                Sing up
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" style={{ fontSize: "20px" }}>
              <button type="button" className="btn btn-lg btn-outline-light ">
                Login
              </button>
            </Link>
          </li>
        </ul>
        c
      </div>
    );

    return (
      <nav
        className="navbar navbar-expand-sm navbar-light "
        style={{ backgroundColor: "#7070EF" }}
      >
        <div className="container">
          <Link to="" className="navbar-brand">
            <img
              src={require("../../images/cinema.svg.png")}
              className="d-inline-block align-top"
              style={{ height: "42px" }}
              alt=""
            />
          </Link>
          {userIsNotAuthenticatedNav}
        </div>
      </nav>
    );
  }
}

export default Header;
