import React, { Component } from "react";
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small unique-color-dark" style={{ backgroundColor: "#F8F9FA" }}>

      <div style={{ backgroundColor: "#001f3f" }}>
          <div class="container">
  
              <div class="row py-4 d-flex align-items-center">
  
                  <div class="col-md-6 col-lg-5 text-center">
                      <h6  style={{fontSize: "20px",color: "white"}} class="mb-0">Get connected with us on social networks!</h6>
                  </div>
  
                  <div class="col-md-6 col-lg-6 text-center text-md-right">
  
                      <Link class="fb-ic">
                          <i class="fa fa-facebook-f white-text mr-5" style={{fontSize: "30px",color: "white"}}> </i>
  
                      </Link>
  
                      <Link class="tw-ic">
                          <i class="fa fa-twitter white-text mr-5" style={{fontSize: "30px",color: "white"}}> </i>
                      </Link>
  
                      <Link class="ins-ic">
                          <i class="fa fa-instagram mr-5" style={{fontSize: "30px",color: "white"}}> </i>
                      </Link>
  
                      <i class="fa fa-youtube mr-5" style={{fontSize: "30px",color: "white"}}></i>
                  </div>
  
              </div>
  
          </div>
      </div>
  
      <div class="container text-center text-md-left mt-5">
  
          <div class="row mt-3">
  
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
                  <h6 class="text-uppercase font-weight-bold">Cinema Manager</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={ { width: "60px" }}/>
                  <p>Cinema manager is a rapidly growing application. It contains many advanced features that allow you to manage your cinema. It has the possibility of customer service, booking places etc.</p>
  
              </div>
  
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
                  <h6 class="text-uppercase font-weight-bold">Useful links</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={ { width: "60px" }}/>
                  <p>
                      <Link href="https://github.com/robLesniak/cinema-app">Git Hub</Link>
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
  
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
                  <h6 class="text-uppercase font-weight-bold">Contact</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={ { width: "60px" }}/>
                  <p>
                      <i class="fa fa-home mr-3"></i> Kraków</p>
                  <p>
                      <i class="fa fa-envelope mr-3"></i> cinema@example.com</p>
                  <p>
                      <i class="fa fa-phone mr-3"></i> + 800 880 123</p>
                  <p>
                      <i class="fa fa-print mr-3"></i> + 843 009 413</p>
  
              </div>
  
          </div>
  
      </div>
  
  </footer>
    );
  }
}

export default Footer;
