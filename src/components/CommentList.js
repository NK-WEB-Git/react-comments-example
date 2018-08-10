import withLoading from "../hoc/withLoading";
import createList from "../hoc/createList";

const containerStyles = {
  margin: 0,
  padding: 0
};

const CommentList = createList(containerStyles);

export default withLoading(CommentList);
