import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer
        className="page-footer font-small unique-color-dark"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div style={{ backgroundColor: "#001f3f" }}>
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center">
                <h6
                  style={{ fontSize: "20px", color: "white" }}
                  className="mb-0"
                >
                  Get connected with us on social networks!
                </h6>
              </div>

              <div className="col-md-6 col-lg-6 text-center text-md-right">
                <Link className="fb-ic">
                  <i
                    className="fa fa-facebook-f white-text mr-5"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                  </i>
                </Link>

                <Link className="tw-ic">
                  <i
                    className="fa fa-twitter white-text mr-5"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                  </i>
                </Link>

                <Link className="ins-ic">
                  <i
                    className="fa fa-instagram mr-5"
                    style={{ fontSize: "30px", color: "white" }}
                  >
                    {" "}
                  </i>
                </Link>

                <i
                  className="fa fa-youtube mr-5"
                  style={{ fontSize: "30px", color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                Cinema Manager
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Cinema manager is a rapidly growing application. It contains
                many advanced features that allow you to manage your cinema. It
                has the possibility of customer service, booking places etc.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link href="https://github.com/robLesniak/cinema-app">
                  Git Hub
                </Link>
              </p>
              <p>
                <Link href="#!">Become an Affiliate</Link>
              </p>
              <p>
                <Link href="#!">Rate Us !!!</Link>
              </p>
              <p>
                <Link href="#!">Help</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-home mr-3" /> Kraków
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> cinema@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 800 880 123
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 843 009 413
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
