import React from "react";
import "./NewCardForm.css";

class NewCardForm extends React.Component {
  state = {
    title: ""
  };

  createCardTitle = e => {
    this.setState({ title: e.target.value });
  };

  createNewCard = () => {
    const { title } = this.state;
    const { createNewCard } = this.props;

    createNewCard({
      title
    });
  };

  render() {
    return (
      <div className="NewCardForm">
        <textarea
          autoFocus
          className="NewCardFormTextarea"
          placeholder="Enter card title"
          onChange={this.createCardTitle}
        />
        <button onClick={this.createNewCard} className="AddCardButton">
          Add Card
        </button>
        <button onClick={this.props.closeForm} className="CloseCreateButton">
          Close
        </button>
      </div>
    );
  }
}

export default NewCardForm;
