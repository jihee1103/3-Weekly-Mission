import { useState, useEffect } from 'react';

import getFetch from '../utils/getFetch';

// 사용자가 아닌 공유한 사람, 공유 페이지의 데이터 정보
const useGetSharePageData = () => {
  const [sharePageData, setSharePageData] = useState({ folder: {} });
  const [isLoadingSharePageData, setIsLoadingSharePageData] = useState();
  const [sharePageDataError, setSharePageDataError] = useState();

  useEffect(() => {
    try {
      setIsLoadingSharePageData(true);
      getFetch('bootcamp-api.codeit.kr', `api/sample/folder`)
        .then((data) => {
          return data.folder;
        })
        .then((result) => {
          setSharePageData(() => {
            return result;
          });
        });
    } catch (err) {
      setSharePageDataError(err);
    } finally {
      setIsLoadingSharePageData(false);
    }
  }, []);

  return { sharePageData, isLoadingSharePageData, sharePageDataError };
};

export default useGetSharePageData;
