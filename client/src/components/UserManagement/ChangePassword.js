import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';

class ChangePassword extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    passwordColor: '',
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFocusPassword = () => {
    this.setState({ passwordColor: "#d1d1fa" });
  };


  reauthenticate = (currentPassword) => {
    let user = firebase.auth().currentUser;
    let cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    console.log(user.email);
    return user.reauthenticateAndRetrieveDataWithCredential(cred);
  }

  changePassword = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      let user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        console.log('password has been changed')
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { let invalid =  error.message });
  }


  render() {
    const { currentPassword, newPassword } = this.state
    return (
      <div>
        <input type="password" placeholder="Current Password" name="currentPassword"
          value={currentPassword}
          onChange={this.handleChange}
        />
        <input type="password" placeholder="New Password" name="newPassword"
          value={newPassword}
          onChange={this.handleChange}
        />
        <button onClick={this.changePassword}>button</button>
      </div>
    )
  }
}

export default  ChangePassword;