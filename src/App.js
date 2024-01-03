import "./App.css";
import ContentsArea from "./ContentsArea/ContentsArea";
import Folder from "./Folder/Folder";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

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
