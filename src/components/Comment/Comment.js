import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  state = {
    redactComment: false,
    commentText: ""
  };

  redactComment = () => {
<<<<<<< HEAD
=======
    console.log(this.props.name);
    console.log(this.props.author);
    console.log(this.props.name !== this.props.author);
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
    if (this.props.name !== this.props.author) return;
    this.setState({
      changeComment: true,
      commentText: this.props.commentText
    });
  };

  changeComment = event => {
    this.setState({ commentText: event.target.value });
  };

<<<<<<< HEAD
  saveChangesComment = () => {
    if (!this.state.commentText) return;

    const { commentText } = this.state;
    const { saveChangesComment, id } = this.props;

    saveChangesComment({ commentText, id });
=======
  changeCommentText = () => {
    if (!this.state.commentText) return;

    const { commentText } = this.state;
    const { changeCommentText } = this.props;

    changeCommentText({ commentText });
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
    this.setState({ changeComment: false });
  };

  deleteComment = () => {
    if (this.props.name !== this.props.author) return;
<<<<<<< HEAD
    const { deleteComment, id } = this.props;
=======
    const { id } = this.props;
    const { deleteComment } = this.props;
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4

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
<<<<<<< HEAD
            onClick={this.saveChangesComment}
=======
            onClick={this.changeCommentText}
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
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
<<<<<<< HEAD
            <span>{this.props.author}&#160;:</span>
=======
            <span>{this.props.creator}&#160;:</span>
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
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
