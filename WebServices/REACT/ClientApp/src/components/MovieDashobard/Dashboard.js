import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import MovieList from "./Movie/MovieList";

class Dashboard extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2" />
          <div
            class="col-md-auto"
            style={{ marginTop: "5px", marginBottom: "5px" }}
          >
            <MovieList movies={movies} />
          </div>
          <div class="col col-lg-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.firestore.ordered.films
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "films" }])
)(Dashboard);
