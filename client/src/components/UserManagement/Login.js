import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div class="container-fluid bg-light py-3">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card card-body">
              <h3 class="text-center mb-4">Login</h3>
                <fieldset>
                  <div class="form-group has-success">
                    <input class="form-control input-lg" placeholder="Username" name="username" value={username} type="username" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group has-success">
                    <input class="form-control input-lg" placeholder="Password" name="password" value={password} type="password" onChange={this.handleChange}/>
                  </div>
                    <input class="btn btn-lg btn-primary btn-block" value="Log me in" type="submit"/>
                </fieldset>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;