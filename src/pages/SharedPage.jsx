import Hero from '../components/Hero/Hero';
import ShareDescription from '../components/Hero/ShareDescription/ShareDescription';
import Contents from '../components/Contents/Contents';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import {
  useGetSharedPageInfo,
  useGetSharedPageIds,
  useSharedPageLogin,
  useGetShareCardList,
  useGetFolderListData,
  useGetSharePageFolderName,
} from './SharedPage.hook';
import { useSearchBar } from '../hooks/useSearchBar';

const SharedPage = () => {
  const { login, userData } = useSharedPageLogin();
  const { sharedPageInfo } = useGetSharedPageInfo();
  const { sharedUserId, sharedFolderId } = useGetSharedPageIds();
  const { folderListData } = useGetFolderListData(sharedUserId, sharedFolderId);
  const { sharePageFolderName } = useGetSharePageFolderName(folderListData, sharedFolderId);
  const { cardListData, setCardListData } = useGetShareCardList();
  const { inputValue, handleInputChange, resetInputValue } = useSearchBar(cardListData, setCardListData);

  return (
    <>
      <Header login={login} userData={userData} />
      <Hero>
        <ShareDescription sharedPageInfo={sharedPageInfo} sharePageFolderName={sharePageFolderName} />
      </Hero>
      <Contents>
        <Search inputValue={inputValue} onInputChange={handleInputChange} resetInputValue={resetInputValue} />
        <CardList cardListData={cardListData} />
      </Contents>
      <Footer />
    </>
  );
};

export default SharedPage;
