import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../store/actions/commentActions";

class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
      date: ""
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
      <div className="comment" style={{ width: "750px" }}>
        <form onSubmit={this.onSubmit}>
          <textarea
            class="form-control"
            style={{ height: "100px" }}
            name="body"
            rows="3"
            onChange={this.onChange}
          />
          <button
            type="submit"
            className="btn btn-block mt-4"
            style={{
              backgroundColor: "#7070EF",
              fontWeight: "bold",
              color: "white"
            }}
            placeholder="Comment"
          >
            Comment{" "}
          </button>
        </form>
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
