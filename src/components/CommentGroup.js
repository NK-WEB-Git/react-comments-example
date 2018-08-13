import React from "react";

import ContainerList from "./ContainerList";
import Comment from "./Comment";
import FormInput from "./FormInput";
import withHiddenProp from "../hoc/withHiddenProp";
import withLoading from "../hoc/withLoading";

const containerStyle = {
  border: "2px dashed #eee",
  padding: "10px"
};

const CommentList = withLoading(ContainerList);

class CommentGroup extends React.Component {
  state = {
    comments: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `http://localhost:5000/comments/${this.props.selectedRecommandation}`
      );
      const responseJson = await response.json();
      this.setState({ comments: responseJson.comments, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  updateComments = newComment => {
    this.setState(prevState =>
      this.setState({
        comments: [...prevState.comments, newComment]
      })
    );
  };

  render() {
    const { comments, loading } = this.state;
    return (
      <div style={containerStyle}>
        <CommentList data={comments} loading={loading}>
          {(item, key) => <Comment comment={item.comment} key={key} />}
        </CommentList>
        <FormInput
          title="Add a comment"
          buttonLabel="Save"
          updateData={this.updateComments}
        />
      </div>
    );
  }
}

export default withHiddenProp(CommentGroup);
