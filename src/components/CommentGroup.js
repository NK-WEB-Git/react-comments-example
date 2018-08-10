import React from "react";

import CommentList from "./CommentList";
import Comment from "./Comment";
import FormInput from "./FormInput";

const containerStyle = {
  border: "2px dashed #eee",
  padding: "10px"
};

export default class CommentGroup extends React.Component {
  state = {
    comments: null,
    loading: true
  };

  componentDidMount() {
    setTimeout(
      () => this.setState({ comments: this.props.comments, loading: false }),
      2000
    );
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
