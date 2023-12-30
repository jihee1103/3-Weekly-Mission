import { useState, useEffect } from 'react';
import { getFolderData } from '../services/folderService';

function useFolderState() {
  const [folder, setFolder] = useState({
    folder: {
      links: [],
      owner: {
        profileImageSource: '',
        name: '',
      },
      name: '',
    },
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFolderData();
        setFolder(data);
      } catch (error) {
        setError(error);
        console.error('폴더 데이터를 불러오는데 실패했습니다', error);
      }
    };

    fetchData();
  }, []);

  return { folder, error };
}

export default useFolderState;
