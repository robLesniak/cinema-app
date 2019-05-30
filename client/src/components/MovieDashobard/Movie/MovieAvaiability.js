import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

const MovieAvaiability = props => {
  const id = props.match.params.movieId;
  const { film } = props;
  const { auth } = props;
  console.log(film);
  if (film) {
    console.log(auth);
    return (
      <div
        className="card center"
        style={{ marginBottom: "5px", marginTop: "50px" }}
      >
        <div
          className="header"
          style={{
            backgroundColor: "#F8F9FA",
            fontSize: "30px",
            fontFamily: "Courier New"
          }}
        >
          {film.title} ({film.Year})
        </div>
        <div className="row ">
          <div className="col-md-4">
            <img
              className=""
              src={film.image}
              alt=""
              style={{ marginBottom: "20px" }}
            />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-6">
              Choose date:
              {film.seance.map(seans => (
                <p className="card-text center">
                  <Link
                    className="btn btn-lg btn-outline-dark"
                    to={`/${id}/reserv/${seans.hall_movieID}`}
                    style={{
                      fontSize: "20px",
                      backgroundColor: "#0051a5",
                      fontWeight: "bold",
                      color: "white",
                      border: "none"
                    }}
                  >
                    {seans.seanceDate}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p style={{ fontSize: "30px" }}>
          {" "}
          <div className="spinner-grow text-info" role="status" />
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.movieId;
  const films = state.firestore.data.films;
  const film = films ? films[id] : null;
  //console.log(state);
  return {
    film: film,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }])
)(MovieAvaiability);
