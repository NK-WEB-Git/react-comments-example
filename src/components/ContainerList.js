import React from "react";

const ContainerList = props => (
  <div>
    {props.data.map((item, index) => props.children(item, item.id || index))}
  </div>
);

export default ContainerList;
