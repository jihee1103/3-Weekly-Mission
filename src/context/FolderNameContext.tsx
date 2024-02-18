import { createContext, useContext, useState, ReactNode } from "react";

interface FolderNameContextType {
  folderName: string | undefined;
  folderId: string | undefined;
  setFolderNameValue: (newFolderName: string) => void;
  setFolderIdValue: (newFolderId: string) => void;
}

const defaultFolderNameContext: FolderNameContextType = {
  folderName: "",
  folderId: undefined,
  setFolderNameValue: () => {},
  setFolderIdValue: () => {},
};

const FolderNameContext = createContext<FolderNameContextType>(
  defaultFolderNameContext
);

interface SharedProviderProps {
  children: ReactNode;
}

export const SharedProvider = ({ children }: SharedProviderProps) => {
  const [folderName, setFolderName] = useState<string | undefined>("전체");
  const [folderId, setFolderId] = useState<string | undefined>();

  const setFolderNameValue = (newFolderName: string) => {
    setFolderName(newFolderName);
  };
  const setFolderIdValue = (newFolderId: string) => {
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
