import { useCallback, useEffect, useState } from 'react';
import { getUserFolders } from '@/api/getUserFolders';

const useGetUserFolders = () => {
  const [userFolders, setUserFolders] = useState({
    links: [],
    userInfo: null,
  });

  const fetchAndSetFolders = useCallback(async () => {
    const {
      folder: { links, ...rest },
    } = await getUserFolders();
    setUserFolders({ links, userInfo: rest });
  }, []);

  useEffect(() => {
    fetchAndSetFolders();
  }, [fetchAndSetFolders]);

  return userFolders;
};

export { useGetUserFolders };
