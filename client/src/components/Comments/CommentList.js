import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <div>
      <div className="container">
        <div
          style={{
            height: "300px",
            overflowY: "auto",
            overflowX: "hidden",
            marginBottom: "5px"
          }}
        >
          {comments &&
            comments.map(comment => {
              return <CommentItem comment={comment} key={comment.date} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CommentList;
