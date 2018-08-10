import React from "react";

const createList = classList => props => {
  return (
    <div style={classList}>
      {props.data.map((item, index) => props.children(item, item.id || index))}
    </div>
  );
};

export default createList;
