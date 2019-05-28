import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="col-md-12 text-center" style={{ marginTop:"50px",
          background: "white"
        }}>
        <img
          src={require("../../images/cinema.svg.png")}
          alt=""
          style={{ color:"white", transform: "scale(0.8, 0.8)" }}
        />
        <h1 className="display-4" >
          Who we are ? <i className="fa fa-video" />
        </h1>
        <p className="lead" style={{ fontSize: "22px" }}>
          We are Premium Cinema, who is involved with the most famous movie
          providers all around the world. Our app is used by the most famous
          brands globally.
        </p>
        <h1 className="display-4" style={{}}>
          Our goal is to:
        </h1>
          <p className="lead" style={{ fontSize: "22px" }}>
            <li className="">provide the best possible user experience</li>
          </p>
          <p className="lead" style={{ fontSize: "22px" }}>
            <li className="">best app performence possible</li>
          </p>
          <p className="lead" style={{ fontSize: "22px" }}>
            <li className="">make our customers happy as much as possible</li>
          </p>
          <p className="lead" style={{ fontSize: "22px" }}>
            <li className="">make customers able leave their opinions</li>
          </p>
        <h1 className="display-4" style={{}}>
          Contact us using one of these below
        </h1>
        <p className="lead" style={{ fontSize: "22px" }}>
          Email: ourmail@premiumCinema.com
        </p>
        <p className="lead" style={{ fontSize: "22px", marginBottom: "5px" }}>
          Phone: +48 666666666
        </p>       
      </div>
    );
  }
}
