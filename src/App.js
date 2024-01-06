import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Card from "./card/Card.js";

const App = function () {
  return (
    <>
      <Header />
      <Profile />
      <Main>
        <Card />
      </Main>
      <Footer />
    </>
  );
};

export default App;
