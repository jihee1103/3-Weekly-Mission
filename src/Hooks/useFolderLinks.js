import { useEffect, useState } from 'react';
import getFetchRequest from '../utils/getFetchRequest';
import { BASE_API_HOST } from '../constants/api';

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
      setData(result.data);
    };

    getUserFolderLinks();
  }, [folderId]);

  return data;
};

export default useFolderLinks;
