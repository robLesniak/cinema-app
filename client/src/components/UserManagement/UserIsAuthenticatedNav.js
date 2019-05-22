import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import { Link } from "react-router-dom";

import Avatar from "react-avatar";

const UserIsAuthenticatedNav = props => {
  // const icon = <i class="fa fa-user-circle" />;
  const { auth, profile } = props;
  return (
        <ul className="navbar-nav ml-auto" style={{ alignItems: "center" }}>
          <li className="nav-item">
            <Link to="/" className="nav-link " style={{ fontSize: "20px" }}>
              <button
                type="button"
                className="btn btn-lg btn-outline"
                style={{ border: "none", fontWeight: "bold" }}
              >
                {profile.username ? (
                  profile.username
                ) : (
                  <Avatar
                    facebookId={auth.providerData[0].uid}
                    size="50"
                    round={true}
                  />
                )}
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" style={{ fontSize: "20px" }}>
              <button
                type="button"
                className="btn btn-lg btn-outline"
                style={{
                  border: "none",
                  fontWeight: "bold"
                }}
                onClick={props.signOut}
              >
                Logout
              </button>
            </Link>
          </li>
        </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIsAuthenticatedNav);
