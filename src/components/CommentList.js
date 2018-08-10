import withLoading from "../hoc/withLoading";
import createList from "../hoc/createList";
import Comment from "./Comment";

const containerStyles = {
  margin: 0,
  padding: 0
};

const CommentList = createList(containerStyles)(Comment);

export default withLoading(CommentList);
