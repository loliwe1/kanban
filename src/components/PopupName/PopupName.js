import React from "react";
import "./PopupName.css";

class PopupName extends React.Component {
  state = {
    name: ""
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };
  saveName = () => {
    if (!this.state.name) return;

    const { name } = this.state;
    const { saveName } = this.props;

    saveName(name);
  };
  render() {
    return (
      <div className="PopupNameBlur">
        <div className="PopupName">
          <form action="#" method="GET">
            <h2>Your Name?</h2>
            <input
              onChange={this.changeName}
              type="text"
              placeholder="Vasya"
              autoFocus
            ></input>
            <button onClick={this.saveName}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupName;
