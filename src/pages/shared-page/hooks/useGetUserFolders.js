import { useCallback, useEffect, useState } from 'react';

import { getSampleUserFolders } from '@api/shared-page/getSampleUserFolders';

const useGetUserFolders = () => {
  const [userFolders, setUserFolders] = useState({
    links: [],
    userInfo: null,
  });

  const fetchAndSetFolders = useCallback(async () => {
    const {
      folder: { links, ...rest },
    } = await getSampleUserFolders();
    setUserFolders({ links, userInfo: rest });
  }, []);

  useEffect(() => {
    fetchAndSetFolders();
  }, [fetchAndSetFolders]);

  return userFolders;
};

export { useGetUserFolders };
