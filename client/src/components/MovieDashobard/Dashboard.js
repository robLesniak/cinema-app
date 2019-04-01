import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>elo</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }])
)(Dashboard);
