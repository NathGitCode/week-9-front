import "./App.css";
import CardContainer from "./comps/cards/cardContainer/CardContainer";
import Footer from "./comps/layout/footer/Footer";
import Header from "./comps/layout/header/Header";
import UserContainer from "./comps/user/userContainer/UserContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <UserContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
