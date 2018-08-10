import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const hStyle = {
  padding: 0,
  margin: 0
};

const countCommentsStyle = {
  paddingTop: "6px"
};

export default class RecommendationTitle extends React.Component {
  render() {
    const { text, countComments } = this.props;
    return (
      <div style={containerStyle}>
        <h2 style={hStyle}>{text}</h2>
        <div style={countCommentsStyle}>followers {countComments}</div>
      </div>
    );
  }
}
