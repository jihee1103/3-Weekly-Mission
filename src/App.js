import './App.css';
import Header from './header/index';
import Folder from './folder/index';
import Search from './search/index';
import CardList from './card-list/index';
import Footer from './footer/index';

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
