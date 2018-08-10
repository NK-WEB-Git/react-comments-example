import React from "react";

const createList = classList => WrappedComponent => props => {
  return (
    <div style={classList}>
      {props.data.map((item, index) => (
        <WrappedComponent {...item} key={item.id || index} />
      ))}
    </div>
  );
};

export default createList;
