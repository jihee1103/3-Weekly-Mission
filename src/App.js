import './App.css';
import Header from './Header/index';
import Folder from './Folder/index';
import Search from './Search/index';
import CardList from './Card-list/index';
import Footer from './Footer/index';

function App() {
  return (
    <>
      <Header />
      <Folder />
      <div className="section">
        <Search />
        <CardList />
      </div>
      <Footer />
    </>
  );
}

export default App;
