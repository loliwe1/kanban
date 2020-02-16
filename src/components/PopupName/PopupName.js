import React from "react";
import "./PopupName.css";

<<<<<<< HEAD
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
=======
const PopupName = props => {
  return (
    <div className="PopupNameBlur">
      <div className="PopupName">
        <form action="#" method="GET">
          <h2>Your Name?</h2>
          <input
            onChange={props.changeName}
            type="text"
            placeholder="Vasya"
            autoFocus
          ></input>
          <button onClick={props.saveName}>Save</button>
        </form>
      </div>
    </div>
  );
};
>>>>>>> b79e2a1fbb202d0ddc001ed8b6a31c17c4d8c9c4

export default PopupName;
