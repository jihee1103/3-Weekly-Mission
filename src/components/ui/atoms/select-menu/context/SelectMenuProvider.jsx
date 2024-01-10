import { createContext, useContext } from 'react';
import styles from './SelectMenuProvider.module.css';

const SelectMenuContext = createContext();

const SelectMenuProvider = ({ children, ...rest }) => {
  return (
    <SelectMenuContext.Provider value={rest}>
      <div className={styles['style-menu-context-wrapper']}>{children}</div>
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
