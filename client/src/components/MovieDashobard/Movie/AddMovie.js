import React, { Component } from "react";
import { createMovie } from "../../../store/actions/movieActions";
import { connect } from "react-redux";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      Year: "",
      actors: "",
      director: "",
      duration: "",
      image: "",
      plot: "",
      title: "",
      type: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newMovie = {
      Year: this.state.Year,
      actors: this.state.actors,
      director: this.state.director,
      duration: this.state.duration,
      image: this.state.image,
      plot: this.state.plot,
      title: this.state.title,
      type: this.state.type
    };

    this.props.createMovie(newMovie, this.props.history);
  };

  render() {
    return (
      <div className="movie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-5 text-center">Add Movie</h1>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Movie title"
                    name="title"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Director"
                    name="director"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Main actors"
                    name="actors"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Type"
                    name="type"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Year of publishment"
                    name="Year"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg "
                    placeholder="Duration in mins"
                    name="duration"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Movie plot"
                    name="plot"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Poster image"
                    name="image"
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-block mt-4"
                  style={{ backgroundColor: "#7070EF" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMovie: (movie, history) => dispatch(createMovie(movie, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
