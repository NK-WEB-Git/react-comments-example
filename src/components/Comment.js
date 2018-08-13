import React from "react";

const pStyle = {
  padding: "5px",
  borderBottom: "2px dashed #eee"
};

function Comment({ comment }) {
  return (
    <div>
      <p style={pStyle}>{comment}</p>
    </div>
  );
}

export default Comment;
