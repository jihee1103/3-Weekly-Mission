import { createContext, useContext } from 'react';

const initialState = {
  createdAt: '',
  description: '',
  imageSource: '',
  url: '',
  folderId: '',
};

const CardProviderContext = createContext(initialState);

const CardProvider = ({ children, ...rest }) => {
  const { createdAt, created_at, imageSource, image_source, folder_id, ...r } = rest;
  const value = {
    createdAt: createdAt || created_at,
    imageSource: imageSource || image_source,
    folderId: folder_id,
    ...r,
  };
  return <CardProviderContext.Provider value={value}>{children}</CardProviderContext.Provider>;
};

export const useCardProvider = () => {
  const context = useContext(CardProviderContext);
  if (context === undefined) throw new Error('useCardProvider must be used within a CardWrapper');
  return context;
};

export default CardProvider;
