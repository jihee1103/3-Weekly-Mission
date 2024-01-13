import Favorites from '../components/favorites/index';
import Search from '../components/search/index';
import SharedCardList from '../components/shared-card-list';

function Shared() {
  return (
    <>
      <Favorites />
      <div className="section">
        <Search />
        <SharedCardList />
      </div>
    </>
  );
}

export default Shared;
