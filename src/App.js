import React, { Component } from "react";
import "./App.css";

import data from "./data/data";
import RecommendationList from "./components/RecommendationList";
import FormInput from "./components/FormInput";
import Recommendation from "./components/Recommendation";

const { results } = data;

const styleApp = {
  width: "800px",
  margin: "auto"
};

class App extends Component {
  state = {
    recommendationData: null,
    loading: true
  };

  componentDidMount() {
    setTimeout(
      () => this.setState({ recommendationData: results, loading: false }),
      2000
    );
  }

  updateRecommendationData = newRecommendation => {
    this.setState(prevState =>
      this.setState({
        recommendationData: [...prevState.recommendationData, newRecommendation]
      })
    );
  };

  render() {
    const { recommendationData, loading } = this.state;

    return (
      <div style={styleApp}>
        <FormInput
          title="Add a recommendation"
          buttonLabel="Save"
          updateData={this.updateRecommendationData}
        />
        <RecommendationList data={recommendationData} loading={loading}>
          {(item, key) => <Recommendation {...item} key={key} />}
        </RecommendationList>
      </div>
    );
  }
}

export default App;
