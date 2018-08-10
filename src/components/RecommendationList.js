import withLoading from "../hoc/withLoading";
import createList from "../hoc/createList";

const stylesReco = {
  padding: "10px",
  border: "2px solid #eee",
  width: "350px"
};

const RecommendationList = createList(stylesReco);

export default withLoading(RecommendationList);
