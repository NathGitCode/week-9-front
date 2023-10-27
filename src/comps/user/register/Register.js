import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../../../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await registerUser(username, email, password);
  };

  return (
    <div className="logreg">
      <h4>Register</h4>
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
          placeholder="Email"
          onChange={(e) => handleChange(e, setEmail)}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Password"
          onChange={(e) => handleChange(e, setPassword)}
        />
        <div>
          <input className="buttons" type="submit" value="Create Account" />
        </div>
      </form>
    </div>
  );
};

export default Register;
