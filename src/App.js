import React, { Component } from "react";
import "./App.css";

import ContainerList from "./components/ContainerList";
import FormInput from "./components/FormInput";
import Recommendation from "./components/Recommendation";
import withLoading from "./hoc/withLoading";

const styleApp = {
  width: "800px",
  margin: "auto"
};

const RecommendationList = withLoading(ContainerList);

class App extends Component {
  state = {
    recommendationData: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/recommandations");
      const responseJson = await response.json();
      this.setState({
        recommendationData: responseJson.results,
        loading: false
      });
    } catch (err) {
      console.log(err);
    }
  }

  updateRecommendationData = newRecommendation => {
    this.setState(prevState => ({
      recommendationData: [...prevState.recommendationData, newRecommendation]
    }));
  };

  render() {
    const { recommendationData, loading } = this.state;

    return (
      <div style={styleApp}>
        <FormInput updateData={this.updateRecommendationData} />
        <RecommendationList data={recommendationData} loading={loading}>
          {(item, key) => <Recommendation {...item} key={key} />}
        </RecommendationList>
      </div>
    );
  }
}

export default App;
