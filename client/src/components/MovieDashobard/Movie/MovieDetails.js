import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import AddComment from "../../Comments/AddComment";
import CommentList from "../../Comments/CommentList";

const MovieDetails = props => {
  const id = props.match.params.movieId;
  const { movie } = props;
  const { comments } = props;
  const { auth } = props;
  if (movie) {
    return (
      <div className="container" style={{}}>
        <div
          className="row justify-content-md-center"
          style={{ marginBottom: "5px" }}
        >
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
                  <div
                    className="card-block px-6"
                    style={{ marginRight: "30px" }}
                  >
                    <h4 className="card-title">{movie.type}</h4>
                    <p className="card-tex">{movie.plot}</p>
                    <p className="card-text">Actors: {movie.actors}</p>
                    <p className="card-text">Director: {movie.director}</p>
                    <p className="card-text">
                      Duration: {movie.duration} mins{" "}
                    </p>
                    {auth.uid ? (
                      <Link
                        to={`/repertoire/${id}`}
                        className="btn btn-lg btn-outline-light mr-2"
                        style={{
                          backgroundColor: "#7070EF",
                          fontwe: "bold",
                          marginLeft: "5px",
                          marginBottom: "5px",
                          border: "none"
                        }}
                      >
                        &nbsp;Avaiability&nbsp;
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="btn btn-lg btn-outline-light mr-2"
                        style={{
                          backgroundColor: "#7070EF",
                          marginLeft: "5px",
                          marginBottom: "5px",
                          border: "none",
                          fontWeight: "bold"
                        }}
                      >
                        Log in to get full experience
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-auto">
            <CommentList comments={comments} />
          </div>
          <div className="col-md-auto">
            {auth.uid ? <AddComment /> : null}
          </div>
        
      </div>
    );
  } else {
    return (
      <div
        className="spinner-grow text-info"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.movieId;
  const movies = state.firestore.data.films;
  const movie = movies ? movies[id] : null;

  return {
    movie: movie,
    comments: state.firestore.ordered.comments,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }, { collection: "comments" }])
)(MovieDetails);
