import React, { useState } from "react";
import Card from "../card/Card";
import "./CardContainer.css";
import { getUsers } from "../../../utils";

const CardContainer = () => {
  const [users, setUsers] = useState([]);
  const buttonHandler = async (e) => {
    e.preventDefault();
    const users = await getUsers();
    setUsers(users.allUsers);
  };

  return (
    <div className="card-container">
      <div>
        <button className="buttons" onClick={buttonHandler}>
          Get All Users
        </button>
      </div>
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
