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
  paddingTop: "6px",
  color: "blue",
  textDecoration: "underline",
  cursor: "pointer"
};

export default class RecommendationTitle extends React.Component {
  selectedRecommandation = () => {
    const { id, handleSelectedRecommandation } = this.props;
    handleSelectedRecommandation(id);
  };

  render() {
    const { text, countComments, id } = this.props;
    return (
      <div id={id} style={containerStyle}>
        <h2 style={hStyle}>{text}</h2>
        <div style={countCommentsStyle}>
          <span onClick={this.selectedRecommandation}>
            followers {countComments}
          </span>
        </div>
      </div>
    );
  }
}
