import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/users">
        <button>All Users</button>
      </Link>
    </div>
  );
};

export default Header;
