import "./App.css";
import ContentsArea from "./ContentsArea/ContentsArea";
import Folder from "./Folder/Folder";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Folder />
      <ContentsArea />
      <Footer />
    </div>
  );
}

export default App;
