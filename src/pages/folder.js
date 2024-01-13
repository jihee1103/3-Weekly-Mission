import AddLink from '../components/add-link/index';
import Search from '../components/search/index';
import FolderCardList from '../components/folder-card-list';

function Folder() {
  return (
    <>
      <AddLink />
      <div className="section">
        <Search />
        <FolderCardList />
      </div>
    </>
  );
}

export default Folder;
