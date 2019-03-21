import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const userIsNotAuthenticatedNav = (
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav nav-pills mr-auto">
          <li className="nav-item nav-divider">
            <Link to="" className="nav-link">
              <i class="fa fa-film" />
              &nbsp;Repertoire
            </Link>
          </li>
          <li className="nav-item nav-divider">
            <Link to="" className="nav-link">
              <i class="fa fa-money" />
              &nbsp;Price list
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link">
              About us&nbsp;
              <i class="fa fa-question-circle-o" />
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/register" className="nav-link ">
              Sing up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
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
              style={{ height: "32px" }}
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
