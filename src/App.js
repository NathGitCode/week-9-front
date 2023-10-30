import { useEffect, useState } from "react";
import "./App.css";
import "../src/comps/layout/footer/Footer.css";
import CardContainer from "./comps/cards/cardContainer/CardContainer";
import Footer from "./comps/layout/footer/Footer";
import Header from "./comps/layout/header/Header";

import LoginSuc from "./comps/user/login/loginSucc/LoginSuc";
import { getSingleUser, getUsers } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./comps/user/login/Login";
import Register from "./comps/user/register/Register";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  console.log(user);

  useEffect(() => {
    const dataReq = async () => {
      const users = await getUsers();
      setUsers(users.allUsers);
    };
    dataReq();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="user-container">
                <Register />
                <Login setUser={setUser} />
              </div>
              <LoginSuc user={user} />
            </>
          }
        />

        <Route path="/users" element={<CardContainer users={users} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
