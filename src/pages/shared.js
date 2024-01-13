import useStickyState from '../hooks/useStickyState';
import Header from '../components/header/index';
import Favorites from '../components/favorites/index';
import Search from '../components/search/index';
import SharedCardList from '../components/shared-card-list';
import Footer from '../components/footer/index';

function Shared() {
  const [isSticky, setIsSticky] = useStickyState(true);

  return (
    <>
      <Header isSticky={!isSticky} setIsSticky={setIsSticky} />
      <Favorites />
      <div className="section">
        <Search />
        <SharedCardList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
