import React from "react";
import "./PopupCard.css";
import Comment from "../Comment/Comment";

class PopupCard extends React.Component {
  state = {
    commentFormFocus: false,
    commentText: ""
  };

  focusCommentForm = () => {
    this.setState({ commentFormFocus: true });
  };

  blurCommentForm = () => {
    this.setState({ commentFormFocus: false });
  };

  changeTitlePopupCard = () => {
    const { changeTitlePopupCard, cardId } = this.props;
    const value = this.textInput.textContent;

    changeTitlePopupCard(value, cardId);
  };

  setRef = element => {
    this.textInput = element;
  };

  descRef = e => {
    this.textInputDesc = e;
  };

  setCommentInputRef = e => {
    this.commentInput = e;
  };

  changeDesc = () => {
    const value = this.textInputDesc.textContent;
    const { changeDesc, cardId } = this.props;

    changeDesc(value, cardId);
  };

  saveCommentText = e => {
    this.setState({ commentText: e.target.value });
  };

  postComment = () => {
    if (!this.state.commentText) return;
    const { commentText } = this.state;
    const { postComment } = this.props;

    postComment({ commentText });
    this.setState({ commentText: "" });
    this.commentInput.value = "";
  };

  renderComments = () => {
    if (!this.props.comments) return;
    return this.props.comments.map((comment, i) => {
      return (
        <Comment
          author={comment.author}
          key={i}
          commentText={comment.commentText}
          name={this.props.name}
          saveChangesComment={this.props.saveChangesComment}
          id={comment.id}
          deleteComment={this.props.deleteComment}
        />
      );
    });
  };

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

  componentDidMount() {
    window.addEventListener("keydown", this.closePopupOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closePopupOnEsc);
  }

  closePopupOnEsc = e => {
    if (e.key === "Escape") {
      this.props.closePopupCard();
    }
  };

  render() {
    const commentClass = ["WriteCommentWrap"];

    if (this.state.commentFormFocus || this.state.commentText) {
      commentClass.push("WriteCommentWrapFocus");
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
            <div>{this.renderTitle()}</div>
            <small>
              In column: <span>{this.props.column}</span>
            </small>
            <p>
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
              ref={this.setCommentInputRef}
            ></textarea>
            <button onClick={this.postComment} className="PostCommentButton">
              Save
            </button>
          </div>
          {this.renderComments()}
          <button onClick={this.removeCard} className="RemoveCard">
            Remove Card
          </button>
        </div>
      </div>
    );
  }
}

export default PopupCard;
