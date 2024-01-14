import { createContext, useContext } from 'react';

import styled from 'styled-components';

const SelectMenuContext = createContext(null);

const SelectMenuProvider = ({ children, ...rest }) => {
  return (
    <SelectMenuContext.Provider value={rest}>
      <StSelectMenuContextWrapper>{children}</StSelectMenuContextWrapper>
    </SelectMenuContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectMenuProvider = () => {
  const context = useContext(SelectMenuContext);

  if (context === undefined) throw new Error('useSelectMenuProvider must be used within a SelectMenuProvider');

  return context;
};

export default SelectMenuProvider;

const StSelectMenuContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 10rem;

  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  position: absolute;
  top: 3rem;
  right: -4rem;
`;
