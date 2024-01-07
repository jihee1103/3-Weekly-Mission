import Search from '../../components/search/index';
import CardList from '../../components/card-list/index';
import AddLink from '../../components/addLink/index';

function Folder() {
  return (
    <>
      <AddLink />
      <div className="section">
        <Search />
        <CardList />
      </div>
    </>
  );
}

export default Folder;
