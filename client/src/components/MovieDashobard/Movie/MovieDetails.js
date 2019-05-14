import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

const MovieDetails = props => {
  const id = props.match.params.movieId;
  const { movie } = props;
  if (movie) {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2" />
          <div
            className="col-md-auto"
            style={{ marginTop: "5px", marginBottom: "5px" }}
          >
            <div className="card" style={{ marginBottom: "5px" }}>
              <div
                className="card-header"
                style={{
                  backgroundColor: "white",
                  fontSize: "25px",
                  fontFamily: "Comic Sans MS"
                }}
              >
                {movie.title} ({movie.Year})
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <img className="" src={movie.image} alt="" />
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-block px-6">
                    <h4 className="card-title">{movie.type}</h4>
                    <p className="card-tex">{movie.plot}</p>
                    <p className="card-text">Actors: {movie.actors}</p>
                    <p className="card-text">Director: {movie.director}</p>
                    <p className="card-text">
                      Duration: {movie.duration} mins{" "}
                    </p>

                    <Link
                      to={`/repertoire/${id}`}
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#7070EF",
                        color: "white",
                        marginLeft: "5px",
                        marginBottom: "5px"
                      }}
                    >
                      &nbsp;Avaiability&nbsp;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-2" />
        </div>
      </div>
    );
  } else {
    return <div className="container center">...Loading Details...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.movieId;
  const movies = state.firestore.data.films;
  const movie = movies ? movies[id] : null;
  return {
    movie: movie
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }])
)(MovieDetails);
