import React from "react";
import "./Column.css";
import NewCardForm from "../NewCardForm/NewCardForm";
import Card from "../Card/Card";

class Column extends React.Component {
  state = {
    isOpen: false,
    newTitle: ""
  };

  changeTitle = () => {
    const { changeTitle, id } = this.props;
    const value = this.textInput.textContent;

    changeTitle(value, id);
  };

  setRef = element => {
    this.textInput = element;
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  closeCardForm = () => {
    this.setState({ isOpen: false });
  };

  createNewCard = newCard => {
    if (!newCard.title) return;

    const { createNewCard, id } = this.props;
    newCard.columnId = id;

    this.closeCardForm();
    createNewCard(newCard);
  };

  render() {
    return (
      <div className="Column">
        <div
          ref={this.setRef}
          onBlur={this.changeTitle}
          className="ColumnTitle"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          {this.props.title}
        </div>
        {this.props.cards
          ? this.props.cards.map(card => {
              return (
                <Card
                  title={card.title}
                  key={card.id}
                  id={card.id}
                  openPopupCard={() => this.props.openPopupCard(card.id)}
                  commentsLength={
                    this.props.comments.filter(
                      comment => comment.cardId === card.id
                    ).length
                  }
                />
              );
            })
          : null}
        <p onClick={this.openForm}>&#10010; Добавить карточку</p>
        {this.state.isOpen ? (
          <NewCardForm
            closeForm={this.closeCardForm}
            createNewCard={this.createNewCard}
          />
        ) : null}
      </div>
    );
  }
}

export default Column;
