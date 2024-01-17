import { useState, useEffect } from 'react';
import getFetch from '../utils/getFetch';
import getFormattedCamelCaseData from '../utils/getFormattedCamelCaseData';

const useGetShareCardList = (sharedFolderId, sharedUserId) => {
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

export default useGetShareCardList;
