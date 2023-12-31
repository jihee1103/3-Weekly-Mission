import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <SearchBar />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
