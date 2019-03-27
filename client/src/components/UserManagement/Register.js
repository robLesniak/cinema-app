import React, { Component } from 'react';

class Register extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <input
          name="username"
          placeholder="Username"
          onChange={this.handleChange} 
          value={username}
        />
        <input
          name="email" 
          placeholder="email"
          type="email" 
          onChange={this.handleChange}
          value={email}
        />
        <input 
          name="password" 
          type="password" 
          placeholder="password" 
          onChange={this.handleChange}
          value={password}
        />
      </div>
    )
  }
}

export default Register;