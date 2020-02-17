import React from "react";
import "./PopupName.css";

class PopupName extends React.Component {
  state = {
    name: ""
  };

  changeName = e => {
    this.setState({ name: e.target.value });
  };
<<<<<<< HEAD

=======
>>>>>>> 5f433637f478609a5173b22abc405039d7eed476
  saveName = () => {
    if (!this.state.name) return;

    const { name } = this.state;
    const { saveName } = this.props;

    saveName(name);
  };
<<<<<<< HEAD

=======
>>>>>>> 5f433637f478609a5173b22abc405039d7eed476
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
<<<<<<< HEAD
            />
=======
            ></input>
>>>>>>> 5f433637f478609a5173b22abc405039d7eed476
            <button onClick={this.saveName}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupName;
