import React from "react";

const createForm = injectedProps => WrappedComponent => {
  return class CreateForm extends React.Component {
    state = {
      value: ""
    };

    updateValue = event => {
      this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.updateData({
        id: 8,
        name: "Brigitee",
        text: this.state.value,
        comments: [],
        countComments: 0
      });
    };

    render() {
      const paramsState = {
        stateValue: this.state.value,
        updateValue: this.updateValue,
        submitValue: this.handleSubmit
      };
      return (
        <WrappedComponent {...this.props} {...injectedProps} {...paramsState} />
      );
    }
  };
};

export default createForm;
