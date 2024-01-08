import Favorites from '../../components/favorites/index';
import Search from '../../components/search/index';
import CardList from '../../components/card-list/index';

function Shared() {
  return (
    <>
      <Favorites />
      <div className="section">
        <Search />
        <CardList />
      </div>
    </>
  );
}

export default Shared;
