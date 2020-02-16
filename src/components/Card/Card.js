import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div onClick={props.openPopupCard} className="Card">
      <h3>{props.title}</h3>
      <small>
        Комментарии: <span>{props.commentsLength}</span>
      </small>
    </div>
  );
};

export default Card;
