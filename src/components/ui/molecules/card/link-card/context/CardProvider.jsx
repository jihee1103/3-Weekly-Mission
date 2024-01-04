import { createContext, useContext } from 'react';

const initialState = {
  createdAt: '',
  description: '',
  imageSource: '',
  url: '',
};

const CardProviderContext = createContext(initialState);

const CardProvider = ({ children, ...rest }) => {
  return <CardProviderContext.Provider value={rest}>{children}</CardProviderContext.Provider>;
};

export const useCardProvider = () => {
  const context = useContext(CardProviderContext);
  if (context === undefined) throw new Error('useCardProvider must be used within a CardWrapper');
  return context;
};

export default CardProvider;
