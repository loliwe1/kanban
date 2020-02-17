import React from "react";
import "./Card.css";

const Card = ({ title, openPopupCard, commentsLength }) => {
  return (
    <div onClick={openPopupCard} className="Card">
      <h3>{title}</h3>
      <small>
        Комментарии: <span>{commentsLength}</span>
      </small>
    </div>
  );
};

export default Card;
