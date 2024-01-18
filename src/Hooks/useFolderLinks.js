import camelcaseKeys from 'camelcase-keys';
import { useEffect, useState } from 'react';
import { BASE_API_HOST } from '../constants/api';
import getFetchRequest from '../utils/getFetchRequest';

const useFolderLinks = (apiPath, folderId = 0) => {
  const [data, setData] = useState([]);

  let newPath = '';
  if (folderId !== 0) {
    newPath = `${apiPath}?folderId=${folderId}`;
  } else {
    newPath = apiPath;
  }

  useEffect(() => {
    const getUserFolderLinks = async () => {
      const result = await getFetchRequest(BASE_API_HOST, newPath);
      setData(camelcaseKeys(result.data));
    };

    getUserFolderLinks();
  }, [folderId]);

  return data;
};

export default useFolderLinks;
