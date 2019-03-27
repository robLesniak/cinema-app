import React, { Component } from 'react';

class Register extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  onChange = (e) => {
    const value = e.target.checked === undefined ? e.target.value : e.target.checked;
    this.setState({
      [e.target.name]: value,
    })
  }

  render() {
    return (
      <div>
        <input
          name="username" placeholder="Username"
          onChange={e => this.onChange(e)} value={this.state.username}
        />
        <input
          name="email" placeholder="email"
          type="email" onChange={e => this.onChange(e)} value={this.state.email}
        />
        <input 
          name="password" type="password" 
          placeholder="password" onChange={e => this.onChange(e)} value={this.state.password}
        />
      </div>
    )
  }
}

export default Register;