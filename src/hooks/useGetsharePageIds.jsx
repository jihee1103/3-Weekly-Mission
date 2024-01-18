import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useGetsharePageIds = () => {
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

export default useGetsharePageIds;
