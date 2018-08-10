import React from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column"
};

const btnStyle = {
  width: "100px"
};

function FormInput({ title, buttonLabel }) {
  return (
    <form style={formStyle}>
      <h3>{title}</h3>
      <textarea />
      <button style={btnStyle} type="button">
        {buttonLabel}
      </button>
    </form>
  );
}

export default FormInput;
