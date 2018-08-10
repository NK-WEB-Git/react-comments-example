import React from "react";

const pStyle = {
  padding: "5px",
  borderBottom: "2px dashed #eee"
};

function Comment({ comment }) {
  return <p style={pStyle}>{comment}</p>;
}

export default Comment;
