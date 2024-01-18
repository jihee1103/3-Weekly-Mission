import useGetSharePageData from '../hooks/useGetSharePageData';
import useGetsharePageIds from '../hooks/useGetsharePageIds';
import useGetSharePageFolderName from '../hooks/useGetSharePageFolderName';

import Hero from '../components/Hero/Hero';
import ShareDescription from '../components/Hero/ShareDescription/ShareDescription';
import Contents from '../components/Contents/Contents';
import Search from '../components/Contents/CardSearchBar/CardSearchBar';
import CardList from '../components/Contents/CardList/CardList';

import useGetFolderListData from '../hooks/useGetFolderListData';
import useGetShareCardList from '../hooks/useGetShareCardList';

const SharedPage = () => {
  const { sharedUserId, sharedFolderId } = useGetsharePageIds();
  const { sharePageData } = useGetSharePageData();
  // 쉐어 페이지 폴더 이름을 알아내기 위한 훅
  const { folderListData } = useGetFolderListData(sharedUserId, sharedFolderId);
  const { sharePageFolderName } = useGetSharePageFolderName(folderListData, sharedFolderId);
  const { cardListData } = useGetShareCardList();

  return (
    <>
      <Hero>
        <ShareDescription sharePageData={sharePageData} sharePageFolderName={sharePageFolderName} />
      </Hero>
      <Contents>
        <Search />
        <CardList cardListData={cardListData} />
      </Contents>
    </>
  );
};

export default SharedPage;
