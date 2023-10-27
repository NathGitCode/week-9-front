import React from "react";
import Card from "../card/Card";
import "./CardContainer.css";

const CardContainer = ({ users }) => {
  return (
    <div className="card-container">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
