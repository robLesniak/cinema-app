import React from "react";
import { Link } from "react-router-dom";

export default function UserIsNotAuthenticatedNav() {
  return (
    <div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/register"
              className="nav-link "
              style={{ fontSize: "20px" }}
            >
              <button
                type="button"
                className="btn btn-lg btn-outline-light "
                style={{ border: "none", fontWeight: "bold" }}
              >
                Sign up
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" style={{ fontSize: "20px" }}>
              <button
                type="button"
                className="btn btn-lg btn-outline-light "
                style={{
                  border: "none",
                  fontWeight: "bold"
                }}
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
