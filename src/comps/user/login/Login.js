import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="logreg">
      <h4>Login</h4>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
