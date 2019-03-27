import React, { Component } from 'react';

class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div class="container-fluid bg-light py-3">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body">
              <h3 class="text-center mb-4">Sign-up</h3>
                {/* <div class="alert alert-danger">
                  <a class="close font-weight-light" data-dismiss="alert" href="#">×</a>Password is too short.
                </div> */}
                <fieldset>
                  <div class="form-group has-success">
                    <input class="form-control input-lg" placeholder="Username" name="username" value={username} type="username" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group has-error">
                    <input class="form-control input-lg" placeholder="E-mail Address" value={email} name="email" type="text" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group has-success">
                    <input class="form-control input-lg" placeholder="Password" name="password" value={password} type="password" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group has-success">
                    <input class="form-control input-lg" placeholder="Confirm Password" name="password" value={password} type="password" onChange={this.handleChange}/>
                  </div>
                  <div class="checkbox">
                    <label class="small">
                      <input name="terms" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                    </label>
                  </div>
                    <input class="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit"/>
                </fieldset>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Register;