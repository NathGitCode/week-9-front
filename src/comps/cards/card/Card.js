import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <p>{user.userName}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Card;
