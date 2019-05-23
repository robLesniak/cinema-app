import React from "react";
import Avatar from "react-avatar";

const CommentItem = ({ comment }) => {
  return (
    <div
      className="card col-xs-12 text-center"
      style={{
        marginBottom: "5px",
        width: "650px"
      }}
    >
      <div
        className="card-header"
        style={{
          fontSize: "14px",
          fontFamily: "Comic Sans MS",
          backgroundColor: "#d1d1fa"
        }}
      >
        {comment.facebookId
          ? (console.log(comment.facebookId),
            (
              <Avatar
                facebookId={comment.facebookId}
                round={true}
                size="40"
                style={{ marginRight: "8px" }}
              />
            ))
          : null}
          Posted by {comment.authorUsername} at {comment.date}
      </div>
      <div className="row ">
        <div className="col-md-12 px-3">
          <p
            className="card-text col-md-12 text-center"
            style={{ textAlign: "center" }}
          >
            {comment.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
