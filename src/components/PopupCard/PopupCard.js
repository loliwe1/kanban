import React from "react";
import "./PopupCard.css";
import Comment from "../Comment/Comment";

class PopupCard extends React.Component {
  state = {
<<<<<<< HEAD
    commentFormFocus: false,
    commentText: ""
  };

  focusCommentForm = () => {
    this.setState({ commentFormFocus: true });
  };

  blurCommentForm = () => {
    this.setState({ commentFormFocus: false });
=======
    writeCommentFocus: false,
    activeTitle: false,
    newTitle: "",
    commentText: ""
  };

  writeCommentFocus = () => {
    this.setState({ writeCommentFocus: true });
  };

  writeCommentBlur = () => {
    this.setState({ writeCommentFocus: false });
  };

  changeTitleActive = () => {
    this.setState({ activeTitle: true });
  };

  closeTitle = () => {
    if (this.state.newTitle) return;
    this.setState({ activeTitle: false });
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
  };

  changeTitlePopupCard = () => {
    const { changeTitlePopupCard, cardId } = this.props;
    const value = this.textInput.textContent;

    changeTitlePopupCard(value, cardId);
  };

  setRef = element => {
    this.textInput = element;
  };

<<<<<<< HEAD
  descRef = e => {
    this.textInputDesc = e;
  };
  clearRef = e => {
    this.textInputEmpty = e;
  };

  changeDesc = () => {
    const value = this.textInputDesc.textContent;
    const { changeDesc, cardId } = this.props;

    changeDesc(value, cardId);
  };

  saveCommentText = e => {
    this.setState({ commentText: e.target.value });
  };

=======
  saveCommentText = e => {
    this.setState({ commentText: e.target.value });
  };
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
  postComment = () => {
    if (!this.state.commentText) return;
    const { commentText } = this.state;
    const { postComment } = this.props;

    postComment({ commentText });
<<<<<<< HEAD
    this.setState({ commentText: "" });
    this.textInputEmpty.value = "";
=======

    this.setState({ commentText: "" });
  };

  changeCommentText = ({ commentText }) => {
    const { changeCommentText } = this.props;

    changeCommentText({ commentText });
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
  };

  renderComments = () => {
    if (!this.props.comments) return;
<<<<<<< HEAD
    return this.props.comments.map((comment, i) => {
      return (
        <Comment
          author={comment.author}
          key={i}
          commentText={comment.commentText}
          name={this.props.name}
          saveChangesComment={this.props.saveChangesComment}
=======

    return this.props.comments.map((comment, i) => {
      return (
        <Comment
          name={this.props.name}
          author={comment.author}
          key={i}
          commentText={comment.commentText}
          creator={comment.creator}
          changeCommentText={this.changeCommentText}
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
          id={comment.id}
          deleteComment={this.props.deleteComment}
        />
      );
    });
  };

<<<<<<< HEAD
  renderTitle = () => {
    if (this.props.creator === this.props.name) {
      return (
        <h1
          ref={this.setRef}
          className="TitleHeader"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={this.changeTitlePopupCard}
        >
          {this.props.title}
        </h1>
      );
    } else {
      return <h1 className="TitleHeader">{this.props.title}</h1>;
    }
  };

  renderDescription = () => {
    if (this.props.creator !== this.props.name) {
      return <div className="Description">{this.props.description || ""}</div>;
    } else {
      return (
        <div
          contentEditable={true}
          suppressContentEditableWarning={true}
          className="Description"
          onBlur={this.changeDesc}
          ref={this.descRef}
        >
          {this.props.description || "Enter a description for the card!"}
        </div>
      );
    }
  };

  removeCard = () => {
    if (this.props.creator !== this.props.name) return;
    const { removeCard, cardId } = this.props;
    removeCard(cardId);
  };

  render() {
    const commentClass = ["WriteCommentWrap"];

    if (this.state.commentFormFocus || this.state.commentText) {
      commentClass.push("WriteCommentWrapFocus");
=======
  render() {
    const writeCommentClassNames = ["WriteCommentWrap"];

    if (this.state.writeCommentFocus || this.state.commentText) {
      writeCommentClassNames.push("WriteCommentWrapFocus");
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
    }

    return (
      <div className="PopupCard">
        <div className="PopupCardWrap">
          <div className="PopupCardClose">
            <p
              className="PopupCardCloseLink"
              onClick={this.props.closePopupCard}
            >
              Close
            </p>
          </div>
          <div className="PopupCardTitle">
<<<<<<< HEAD
            <div>{this.renderTitle()}</div>
=======
            <div className="TitleStyle">
              <h1
                ref={this.setRef}
                className="TitleHeader"
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={this.changeTitlePopupCard}
              >
                {this.props.title}
              </h1>
              <button onClick={this.saveTitle} className="SaveTitle">
                Save
              </button>
              <button onClick={this.closeTitle} className="CloseTitle">
                Close
              </button>
            </div>
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
            <small>
              In column: <span>{this.props.column}</span>
            </small>
            <p>
<<<<<<< HEAD
              Created a card: <span>{this.props.creator}</span>
            </p>
          </div>
          {this.renderDescription()}
          <div>Comments:</div>
          <div className={commentClass.join(" ")}>
            <textarea
              onFocus={this.focusCommentForm}
              onBlur={this.blurCommentForm}
              onChange={this.saveCommentText}
              className="WriteComment"
              placeholder="write a comment..."
              ref={this.clearRef}
=======
              Created a card: <span>{this.props.name}</span>
            </p>
          </div>

          <textarea
            className="Description"
            placeholder="Enter a description for the card!"
            defaultValue={this.props.description}
            onChange={this.props.changeDescription}
          ></textarea>
          <div>Comments:</div>
          <div className={writeCommentClassNames.join(" ")}>
            <textarea
              onFocus={this.writeCommentFocus}
              onBlur={this.writeCommentBlur}
              onChange={this.saveCommentText}
              className="WriteComment"
              placeholder="write a comment..."
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
            ></textarea>
            <button onClick={this.postComment} className="PostCommentButton">
              Save
            </button>
          </div>
          {this.renderComments()}
<<<<<<< HEAD
          <button onClick={this.removeCard} className="RemoveCard">
=======
          <button onClick={this.props.removeCard} className="RemoveCard">
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4
            Remove Card
          </button>
        </div>
      </div>
    );
  }
}

export default PopupCard;
