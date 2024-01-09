import { createContext, useContext, useState } from "react";

const FolderNameContext = createContext({
  folderName: "",
  setFolderName: () => {},
});

export const SharedProvider = ({ children }) => {
  const [folderName, setFolderName] = useState("전체");
  const [folderId, setFolderId] = useState();

  const setFolderNameValue = (newFolderName) => {
    setFolderName(newFolderName);
  };
  const setFolderIdValue = (newFolderId) => {
    setFolderId(newFolderId);
  };

  return (
    <FolderNameContext.Provider
      value={{ folderName, folderId, setFolderNameValue, setFolderIdValue }}
    >
      {children}
    </FolderNameContext.Provider>
  );
};

export const useFolderNameContext = () => {
  return useContext(FolderNameContext);
};
