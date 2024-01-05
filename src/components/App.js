import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SearchBar />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
