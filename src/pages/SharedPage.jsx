import Hero from '../components/Hero/Hero';
import ShareDescription from '../components/Hero/ShareDescription/ShareDescription';
import Contents from '../components/Contents/Contents';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import {
  useGetSharedPageInfo,
  useGetsharedPageIds,
  useSharedPageLogin,
  useGetShareCardList,
  useGetFolderListData,
  useGetSharePageFolderName,
} from './SharedPage.hook';

const SharedPage = () => {
  const { login, userData } = useSharedPageLogin();
  const { sharedPageInfo } = useGetSharedPageInfo();
  const { sharedUserId, sharedFolderId } = useGetsharedPageIds();
  const { folderListData } = useGetFolderListData(sharedUserId, sharedFolderId);
  const { sharePageFolderName } = useGetSharePageFolderName(folderListData, sharedFolderId);
  const { cardListData } = useGetShareCardList();

  return (
    <>
      <Header login={login} userData={userData} />
      <Hero>
        <ShareDescription sharedPageInfo={sharedPageInfo} sharePageFolderName={sharePageFolderName} />
      </Hero>
      <Contents>
        <Search />
        <CardList cardListData={cardListData} />
      </Contents>
      <Footer />
    </>
  );
};

export default SharedPage;
