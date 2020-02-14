import React from "react";
import "./PopupName.css";

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

export default PopupName;
