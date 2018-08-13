import React from "react";

import RecommendationTitle from "./RecommendationTitle";
import CommentGroup from "./CommentGroup";

const stylesReco = {
  padding: "10px",
  border: "2px solid #eee",
  width: "350px",
  marginBottom: "20px"
};

export default class Recommendation extends React.Component {
  state = {
    selectedRecommandation: null
  };

  handleSelectedRecommandation = id => {
    this.setState({ selectedRecommandation: id });
  };

  render() {
    const { text, countComments, id } = this.props;
    const { selectedRecommandation } = this.state;
    return (
      <div style={stylesReco}>
        <RecommendationTitle
          id={id}
          text={text}
          countComments={countComments}
          handleSelectedRecommandation={this.handleSelectedRecommandation}
        />
        <CommentGroup
          selectedRecommandation={selectedRecommandation}
          hidden={!selectedRecommandation}
        />
      </div>
    );
  }
}
