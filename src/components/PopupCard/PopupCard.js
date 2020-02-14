import React from "react";
import "./PopupCard.css";
import Comment from "../Comment/Comment";

class PopupCard extends React.Component {
  state = {
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
  };

  changeTitlePopupCard = () => {
    const { changeTitlePopupCard, cardId } = this.props;
    const value = this.textInput.textContent;

    changeTitlePopupCard(value, cardId);
  };

  setRef = element => {
    this.textInput = element;
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
  };

  changeCommentText = ({ commentText }) => {
    const { changeCommentText } = this.props;

    changeCommentText({ commentText });
  };

  renderComments = () => {
    if (!this.props.comments) return;

    return this.props.comments.map((comment, i) => {
      return (
        <Comment
          name={this.props.name}
          author={comment.author}
          key={i}
          commentText={comment.commentText}
          creator={comment.creator}
          changeCommentText={this.changeCommentText}
          id={comment.id}
          deleteComment={this.props.deleteComment}
        />
      );
    });
  };

  render() {
    const writeCommentClassNames = ["WriteCommentWrap"];

    if (this.state.writeCommentFocus || this.state.commentText) {
      writeCommentClassNames.push("WriteCommentWrapFocus");
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
            <small>
              In column: <span>{this.props.column}</span>
            </small>
            <p>
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
            ></textarea>
            <button onClick={this.postComment} className="PostCommentButton">
              Save
            </button>
          </div>
          {this.renderComments()}
          <button onClick={this.props.removeCard} className="RemoveCard">
            Remove Card
          </button>
        </div>
      </div>
    );
  }
}

export default PopupCard;
