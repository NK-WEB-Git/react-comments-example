import React from "react";
import createForm from "../hoc/createForm";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px"
};

const btnStyle = {
  width: "100px"
};

function FormInput({
  title,
  buttonLabel,
  updateValue,
  stateValue,
  submitValue
}) {
  return (
    <form style={formStyle} onSubmit={submitValue}>
      <h3>{title}</h3>
      <textarea onChange={updateValue} value={stateValue} />
      <button style={btnStyle}>{buttonLabel}</button>
    </form>
  );
}

export default createForm({
  title: "Add a recommendation",
  buttonLabel: "Save"
})(FormInput);
