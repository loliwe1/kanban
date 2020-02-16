import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  state = {
    redactComment: false,
    commentText: ""
  };

  redactComment = () => {
    if (this.props.name !== this.props.author) return;
    this.setState({
      changeComment: true,
      commentText: this.props.commentText
    });
  };

  changeComment = event => {
    this.setState({ commentText: event.target.value });
  };

  saveChangesComment = () => {
    if (!this.state.commentText) return;

    const { commentText } = this.state;
    const { saveChangesComment, id } = this.props;

    saveChangesComment({ commentText, id });
    this.setState({ changeComment: false });
  };

  deleteComment = () => {
    if (this.props.name !== this.props.author) return;
    const { deleteComment, id } = this.props;

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
            onClick={this.saveChangesComment}
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
            <span>{this.props.author}&#160;:</span>
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
