import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserIsAuthenticatedNav from "../UserManagement/UserIsAuthenticatedNav";
import UserIsNotAuthenticatedNav from "../UserManagement/UserIsNotAuthenticatedNav";

const Header = props => {
  const { auth } = props;
  const links = auth.uid ? (
    <UserIsAuthenticatedNav />
  ) : (
    <UserIsNotAuthenticatedNav />
  );
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light "
      style={{
        backgroundColor: "#4b4bf4"
      }}
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
        <ul className="navbar-nav nav-pills mr-auto">
          <li className="nav-item nav-divider">
            <Link
              to="/repertoire"
              className="nav-link "
              style={{ fontSize: "20px" }}
            >
              <button
                type="button"
                className="btn btn-lg btn-outline-light "
                style={{ border: "none", fontWeight: "bold" }}
              >
                <i className="fa fa-film" />
                &nbsp;Repertoire
              </button>
            </Link>
          </li>
          <li className="nav-item nav-divider">
            <Link
              to="/priceList"
              className="nav-link"
              style={{ fontSize: "20px" }}
            >
              <button
                type="button"
                className="btn btn-lg btn-outline-light "
                style={{ border: "none", fontWeight: "bold" }}
              >
                <i className="fa fa-money" />
                &nbsp;Price list
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutUs"
              className="nav-link"
              style={{ fontSize: "20px" }}
            >
              <button
                type="button"
                className="btn btn-lg btn-outline-light "
                style={{ border: "none", fontWeight: "bold" }}
              >
                About us&nbsp;
                <i className="fa fa-question-circle-o" />
              </button>
            </Link>
          </li>
        </ul>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Header);
