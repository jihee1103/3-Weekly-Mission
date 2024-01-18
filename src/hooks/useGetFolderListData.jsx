import { useState, useEffect } from 'react';

import getFetch from '../utils/getFetch';

const useGetFolderListData = (sharedUserId, sharedFolderId) => {
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

export default useGetFolderListData;
