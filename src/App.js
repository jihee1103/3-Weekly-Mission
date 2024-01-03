import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cardlist from "./components/Cardlist";
import CardContainer from "./components/hooks/CardContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Cardlist />
      <Footer />
    </div>
  );
}

export default App;
