import React from "react";

const withHiddenProp = WrappedComponent => props =>
  props.hidden ? null : <WrappedComponent {...props} />;

export default withHiddenProp;
