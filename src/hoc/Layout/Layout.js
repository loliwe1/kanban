import React from "react";
import "./Layout.css";
import Column from "../../components/Column/Column";
import PopupName from "../../components/PopupName/PopupName";
import PopupCard from "../../components/PopupCard/PopupCard";

// localStorage.clear();
if (!localStorage.getItem("columns")) {
  localStorage.setItem(
    "columns",
    JSON.stringify([
      { id: 1, title: "TODO" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Testing" },
      { id: 4, title: "Done" }
    ])
  );
}

class Layout extends React.Component {
  state = {
    name: localStorage.getItem("name") || "",
    columns: JSON.parse(localStorage.getItem("columns")),
    cards: JSON.parse(localStorage.getItem("cards")) || [],
    comments: JSON.parse(localStorage.getItem("comments")) || [],
    nextCardId: JSON.parse(localStorage.getItem("nextCardId")) || 1,
    nextCommentId: JSON.parse(localStorage.getItem("nextCommentId")) || 1,

    nameText: "",
    popupCard: ""
  };

  changeTitle = (value, colId) => {
    const columns = this.state.columns;
    const columnId = columns.findIndex(column => column.id === colId);
    columns[columnId].title = value;

    this.setState({ columns });
    localStorage.setItem("columns", JSON.stringify(columns));
  };

  createNewCard = card => {
    if (!card.title) return;

    card.id = this.state.nextCardId;
    card.description = "";
    card.creator = this.state.name;

    const cards = this.state.cards;
    cards.push(card);

    let nextCardId = this.state.nextCardId;
    nextCardId += 1;

    this.setState({ cards, newCardTitle: "", nextCardId });

    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("nextCardId", JSON.stringify(nextCardId));
  };

  changeNameHand = e => {
    this.setState({ nameText: e.target.value });
  };

  saveNameHand = () => {
    if (!this.state.nameText) return;

    const name = this.state.nameText;
    this.setState({ name });
    localStorage.setItem("name", JSON.stringify(name));
  };

  openPopupCard = id => {
    const card = this.state.cards.find(card => card.id === id);
    this.setState({ popupCard: card });
  };

  closePopupCard = () => {
    this.setState({ popupCard: "" });
  };

  changeDescription = e => {
    const cardId = this.state.popupCard.id;
    const cards = this.state.cards;

    const id = cards.findIndex(card => card.id === cardId);
    cards[id].description = e.target.value;

    this.setState({ cards });
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  saveTitle = newTitle => {
    if (!newTitle) return;

    const cardId = this.state.popupCard.id;
    const cards = this.state.cards.concat();

    const id = cards.findIndex(card => card.id === cardId);
    cards[id].title = newTitle;

    this.setState({ cards });
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  removeCard = () => {
    const cardId = this.state.popupCard.id;
    const cards = this.state.cards.concat();
    const id = cards.findIndex(card => card.id === cardId);
    cards.splice(id, 1);

    // remove comments
    const comments = this.state.comments.filter(
      comment => comment.cardId !== cardId
    );

    this.setState({ popupCard: "", cards, comments });
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  postComment = comment => {
    comment.cardId = this.state.popupCard.id;
    comment.creator = this.state.popupCard.creator;
    comment.id = this.state.nextCommentId;
    comment.author = this.state.name;

    const comments = this.state.comments;
    comments.unshift(comment);

    let nextCommentId = this.state.nextCommentId;
    nextCommentId += 1;

    this.setState({ comments, nextCommentId });
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  columnTitle = () => {
    const title = this.state.columns.find(
      column => column.id === this.state.popupCard.columnId
    ).title;
    return title;
  };

  commentsCard = () => {
    const comments = this.state.comments.filter(
      comment => comment.cardId === this.state.popupCard.id
    );
    return comments;
  };

  changeCommentText = ({ commentText }) => {
    const comments = this.state.comments;
    comments.find(
      comment => comment.cardId === this.state.popupCard.id
    ).commentText = commentText;

    this.setState({ comments });
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  deleteComment = ({ id }) => {
    const comments = this.state.comments;
    const comId = comments.findIndex(comment => comment.id === id);
    comments.splice(comId, 1);

    this.setState({ comments });
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  changeTitlePopupCard = (value, cardId) => {
    const cards = this.state.cards;
    const id = cards.findIndex(card => card.id === cardId);
    cards[id].title = value;

    this.setState({ cards });
    localStorage.setItem("cards", JSON.stringify(cards));
  };

  render() {
    return (
      <div className="Layout">
        {this.state.columns.map(column => {
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              changeTitle={this.changeTitle}
              createNewCard={this.createNewCard}
              cards={this.state.cards.filter(
                card => card.columnId === column.id
              )}
              openPopupCard={this.openPopupCard}
              comments={this.state.comments}
            />
          );
        })}
        {this.state.name ? null : (
          <PopupName
            changeName={this.changeNameHand}
            saveName={this.saveNameHand}
          />
        )}
        {this.state.popupCard ? (
          <PopupCard
            name={this.state.name}
            cardId={this.state.popupCard.id}
            title={this.state.popupCard.title}
            description={this.state.popupCard.description}
            column={this.columnTitle()}
            comments={this.commentsCard()}
            closePopupCard={this.closePopupCard}
            changeDescription={this.changeDescription}
            saveTitle={this.saveTitle}
            removeCard={this.removeCard}
            postComment={this.postComment}
            changeCommentText={this.changeCommentText}
            deleteComment={this.deleteComment}
            changeTitlePopupCard={this.changeTitlePopupCard}
          />
        ) : null}
      </div>
    );
  }
}

export default Layout;