import { createContext, useContext, useMemo } from 'react';

const initialState = {
  createdAt: '',
  description: '',
  imageSource: '',
  url: '',
};

const CardProviderContext = createContext(initialState);

const CardProvider = ({ children, createdAt, description, imageSource, url }) => {
  const providerValue = useMemo(
    () => ({
      createdAt,
      description,
      imageSource,
      url,
    }),
    [createdAt, description, imageSource, url],
  );

  return <CardProviderContext.Provider value={providerValue}>{children}</CardProviderContext.Provider>;
};

export const useCardProvider = () => {
  const context = useContext(CardProviderContext);
  if (context === undefined) throw new Error('useCardProvider must be used within a CardProvider');
  return context;
};

export default CardProvider;
