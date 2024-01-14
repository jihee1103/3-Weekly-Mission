import { createContext, useContext, useState } from 'react';

const FolderContext = createContext();

const FolderContextProvider = ({ children }) => {
  const [folderPageInfos, setFolderPageInfos] = useState({
    folderCategories: null,
    userId: null,
    targetLink: null,
    currentFolderId: null,
  });
  console.log(folderPageInfos);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <FolderContext.Provider value={{ folderPageInfos, setFolderPageInfos }}>{children}</FolderContext.Provider>;
};

export default FolderContextProvider;

export const useFolderContext = () => {
  const context = useContext(FolderContext);

  if (context === undefined) throw new Error('useFolderContext must be used within a FolderContextProvider');

  return context;
};
