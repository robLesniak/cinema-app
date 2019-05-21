import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light justify-content-center fixed-bottom "
          style={{ backgroundColor: "#7070EF" }}
        >
          <Link to="" class="navbar-brand">
            Fixed bottom
          </Link>
        </nav>
      </div>
    );
  }
}

export default Footer;
