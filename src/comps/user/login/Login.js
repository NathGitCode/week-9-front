import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../../utils";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    const newUser = await loginUser(username, password);
  };

  console.log(username);
  console.log(password);
  return (
    <div className="logreg">
      <h4>Login</h4>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputs"
          type="text"
          placeholder="Username"
          onChange={(e) => handleChange(e, setUsername)}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />
        <div>
          <Link to="/userinfo">
            <input className="buttons" type="submit" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
