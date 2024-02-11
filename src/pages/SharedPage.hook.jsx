import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getFetch from '../utils/getFetch';
import getFormattedCamelCaseData from '../utils/getFormattedCamelCaseData';

export const useSharedPageLogin = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);

  // Header의 유저 프로필 데이터
  useEffect(() => {
    try {
      getFetch('bootcamp-api.codeit.kr', 'api/users/1').then((user) => {
        setUserData({ ...user.data[0] });
        setLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { login, userData };
};

// sharedPage의 id와 현재 로그인된 유저의 id를 가져오는 훅
export const useGetsharedPageIds = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line no-unused-vars
  const [sharedUserId, setSharedUserId] = useState(null);
  const [sharedFolderId, setSharedFolderId] = useState(null);

  useEffect(() => {
    const userId = searchParams.get('user');
    const folderId = searchParams.get('folder');
    setSharedUserId(userId);
    setSharedFolderId(folderId);
  }, []);

  return { sharedUserId, sharedFolderId };
};

// 사용자가 아닌 공유한 사람, 공유 페이지의 데이터 정보
export const useGetSharedPageInfo = () => {
  const [sharedPageInfo, setSharedPageInfo] = useState({ folder: {} });
  const [isLoadingSharedPageInfo, setIsLoadingSharedPageInfo] = useState();
  const [sharedPageInfoError, setSharedPageInfoError] = useState();

  useEffect(() => {
    try {
      setIsLoadingSharedPageInfo(true);
      getFetch('bootcamp-api.codeit.kr', `api/sample/folder`)
        .then((data) => {
          return data.folder;
        })
        .then((result) => {
          setSharedPageInfo(() => {
            return result;
          });
        });
    } catch (err) {
      setSharedPageInfoError(err);
    } finally {
      setIsLoadingSharedPageInfo(false);
    }
  }, []);

  return { sharedPageInfo, isLoadingSharedPageInfo, sharedPageInfoError };
};

// useGetFolderListData로 폴더 데이터를 가져온 후, 현재 페이지의 폴더 이름을 가져온다.
export const useGetFolderListData = (sharedUserId, sharedFolderId) => {
  const [folderListData, setFolderListData] = useState([]);
  const [isLoadingFolderListData, setIsLoadingFolderListData] = useState(false);
  const [folderListDataError, setFolderListDataError] = useState();

  useEffect(() => {
    try {
      setIsLoadingFolderListData(true);
      if (sharedFolderId) {
        getFetch('bootcamp-api.codeit.kr', `api/users/${sharedUserId}/folders`)
          .then((res) => {
            return res.data;
          })
          .then((result) => {
            return setFolderListData(result);
          });
      }
    } catch (err) {
      setFolderListDataError(err);
    } finally {
      setIsLoadingFolderListData(false);
    }
  }, [sharedUserId]);

  return { folderListData, isLoadingFolderListData, folderListDataError };
};

export const useGetSharePageFolderName = (folderListData, sharedFolderId) => {
  const [sharePageFolderName, setSharePageFolderName] = useState('');

  useEffect(() => {
    const foundFolder = folderListData?.find((folder) => {
      return folder?.id === Number(sharedFolderId);
    });
    setSharePageFolderName(foundFolder?.name);
  }, [folderListData, sharedFolderId]);

  return { sharePageFolderName };
};

// sharedPage의 카드 리스트 데이터를 가져오는 훅
export const useGetShareCardList = (sharedFolderId, sharedUserId) => {
  const [cardListData, setCardListData] = useState([]);
  const [isLoadingSetCardListData, setIsLoadingSetCardListData] = useState(false);
  const [cardListDataError, setCardListDataError] = useState();

  useEffect(() => {
    try {
      setIsLoadingSetCardListData(true);
      if (sharedFolderId && sharedUserId) {
        getFetch('bootcamp-api.codeit.kr', `api/users/${sharedUserId}/links?folderId=${sharedFolderId}`)
          .then((data) => {
            return data;
          })
          .then((result) => {
            // sample 데이터의 link부분의 key를 카멜 케이스에서 스네이크 케이스로 변환
            const formattedData = getFormattedCamelCaseData(result);
            setCardListData(formattedData);
          });
      }
    } catch (err) {
      setCardListDataError(err);
    } finally {
      setIsLoadingSetCardListData(false);
    }
  }, [sharedFolderId, sharedUserId]);

  return { cardListData, isLoadingSetCardListData, cardListDataError };
};
