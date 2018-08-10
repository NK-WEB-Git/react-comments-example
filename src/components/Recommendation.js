import React from "react";

import RecommendationTitle from "./RecommendationTitle";
import CommentGroup from "./CommentGroup";

export default class Recommendation extends React.Component {
  render() {
    const { text, countComments, comments } = this.props;
    return (
      <React.Fragment>
        <RecommendationTitle text={text} countComments={countComments} />
        <CommentGroup comments={comments} />
      </React.Fragment>
    );
  }
}
