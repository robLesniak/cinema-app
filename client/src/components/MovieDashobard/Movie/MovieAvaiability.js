import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

const MovieAvaiability = props => {
  const id = props.match.params.movieId;
  const { film } = props;
  if (film) {
    return (
      <div className="card center" style={{ marginBottom: "5px" }}>
        <div
          className="card-header"
          style={{
            backgroundColor: "white",
            fontSize: "25px",
            fontFamily: "Comic Sans MS"
          }}
        >
          {film.title} ({film.Year})
        </div>
        <div className="row ">
          <div className="col-md-4">
            <img className="" src={film.image} alt="" />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-6">
              Choose date:
              <p className="card-text center">
                <Link
                  className="btn btn-lg btn-outline-dark"
                  to={`/repertoire/${id}/${film.avaiability}`}
                  style={{
                    fontSize: "20px",
                    backgroundColor: "#7070EF",
                    fontWeight: "bold",
                    border: "none"
                  }}
                >
                  {film.avaiability}
                </Link>
              </p>
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
    film: film
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }])
)(MovieAvaiability);
