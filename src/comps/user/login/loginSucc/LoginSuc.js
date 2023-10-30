import React from "react";
import "./LoginSuc.css";

const LoginSuc = ({ user }) => {
  return (
    <div className="login-suc">
      <h3>Login Succesful {`${user.userName}`}</h3>
    </div>
  );
};

export default LoginSuc;
