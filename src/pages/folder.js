import useStickyState from '../hooks/useStickyState';
import Header from '../components/header/index';
import AddLink from '../components/add-link/index';
import Search from '../components/search/index';
import FolderCardList from '../components/folder-card-list';
import Footer from '../components/footer/index';

function Folder() {
  const [isSticky, setIsSticky] = useStickyState(true);

  return (
    <>
      <Header isSticky={!isSticky} setIsSticky={setIsSticky} />
      <AddLink />
      <div className="section">
        <Search />
        <FolderCardList />
      </div>
      <Footer />
    </>
  );
}

export default Folder;
