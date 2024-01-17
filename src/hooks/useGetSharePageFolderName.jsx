import { useEffect, useState } from 'react';

const useGetSharePageFolderName = (folderListData, sharedFolderId) => {
  const [sharePageFolderName, setSharePageFolderName] = useState('');

  useEffect(() => {
    const foundFolder = folderListData?.find((folder) => {
      return folder?.id === Number(sharedFolderId);
    });
    setSharePageFolderName(foundFolder?.name);
  }, [folderListData, sharedFolderId]);

  return { sharePageFolderName };
};

export default useGetSharePageFolderName;
