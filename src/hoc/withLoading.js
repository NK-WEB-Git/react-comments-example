import React from "react";
import Loader from "../components/Loader";

function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    if (props.loading) {
      return <Loader />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
