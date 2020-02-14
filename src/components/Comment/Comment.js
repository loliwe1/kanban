import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  state = {
    redactComment: false,
    commentText: ""
  };

  redactComment = () => {
    console.log(this.props.name);
    console.log(this.props.author);
    console.log(this.props.name !== this.props.author);
    if (this.props.name !== this.props.author) return;
    this.setState({
      changeComment: true,
      commentText: this.props.commentText
    });
  };

  changeComment = event => {
    this.setState({ commentText: event.target.value });
  };

  changeCommentText = () => {
    if (!this.state.commentText) return;

    const { commentText } = this.state;
    const { changeCommentText } = this.props;

    changeCommentText({ commentText });
    this.setState({ changeComment: false });
  };

  deleteComment = () => {
    if (this.props.name !== this.props.author) return;
    const { id } = this.props;
    const { deleteComment } = this.props;

    deleteComment({ id });
  };

  commentRender = () => {
    if (this.state.changeComment) {
      return (
        <div>
          <textarea
            className="CommentChangeTextArea"
            autoFocus
            defaultValue={this.props.commentText}
            onChange={this.changeComment}
          />
          <button
            onClick={this.changeCommentText}
            className="CommentChangeButton"
          >
            Save
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            <span>{this.props.creator}&#160;:</span>
          </p>
          <p>{this.props.commentText}</p>
          <hr />
          <p onClick={this.redactComment} className="CommentRedact">
            Redact
          </p>
          <p onClick={this.deleteComment} className="CommentRemove">
            Remove
          </p>
        </div>
      );
    }
  };

  render() {
    return <div className="Comment">{this.commentRender()}</div>;
  }
}

export default Comment;
