import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="logreg">
      <h4>Register for free</h4>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default Register;
