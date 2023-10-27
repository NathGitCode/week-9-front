import React from "react";
import "./LoginSuc.css";

const LoginSuc = ({ username }) => {
  return <div className="login-suc">Login Succesful {`${username}`}</div>;
};

export default LoginSuc;
