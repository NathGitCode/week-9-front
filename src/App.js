import { useEffect, useState } from "react";
import "./App.css";
import "../src/comps/layout/footer/Footer.css";
import CardContainer from "./comps/cards/cardContainer/CardContainer";
import Footer from "./comps/layout/footer/Footer";
import Header from "./comps/layout/header/Header";
import UserContainer from "./comps/user/userContainer/UserContainer";
import LoginSuc from "./comps/loginSuc/LoginSuc";
import { getSingleUser, getUsers } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

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
        <Route path="/" element={<UserContainer />} />
        <Route path="/users" element={<CardContainer users={users} />} />
        <Route path="/userinfo" element={<LoginSuc users={users} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
