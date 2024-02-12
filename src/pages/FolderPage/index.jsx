import useStickyState from '../../hooks/useStickyState';
import { Header } from '../../components/Header/index';
import { AddLinkInput } from '../../components/AddLinkInput/index';
import { Search } from '../../components/SearchInput/index';
import { FolderCardList } from '../../components/FolderCardList/index';
import { Footer } from '../../components/Footer/index';

export const Folder = () => {
  const [isSticky, setIsSticky] = useStickyState(true);

  return (
    <>
      <Header isSticky={!isSticky} setIsSticky={setIsSticky} />
      <AddLinkInput />
      <div className="section">
        <Search />
        <FolderCardList />
      </div>
      <Footer />
    </>
  );
};
