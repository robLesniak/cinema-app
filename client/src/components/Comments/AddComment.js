import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../store/actions/commentActions";

class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
      date: "",
      movieId: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let currentDate = new Date();
    let datetime =
      currentDate.getDate() +
      "/" +
      (currentDate.getMonth() + 1) +
      "/" +
      currentDate.getFullYear() +
      " @ " +
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes();
    const newComment = {
      body: this.state.body,
      date: datetime.toString()
    };

    this.props.createComment(newComment);
    this.setState({ comment: "", date: "" });
  };

  render() {
    return (
      <div className="md-12 text-center" style={{ marginBottom: "5px" }}>
        <textarea
          className="form-control"
          style={{ height: "100px" }}
          name="body"
          rows="3"
          onChange={this.onChange}
        />
        <button
          onClick={this.onSubmit}
          className="btn btn-block"
          style={{
            backgroundColor: "#7070EF",
            fontWeight: "bold",
            color: "white",
            marginBottom: "5px"
          }}
        >
          Comment{" "}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddComment);
