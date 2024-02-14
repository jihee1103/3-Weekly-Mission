import { useMemo, useRef } from 'react';

import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';
import { useTargetVisibleState } from './comp/hooks/useTargetVisibleState';

const FolderPage = <T extends HTMLElement>() => {
  const addLinkRef = useRef<T | null>(null);
  const footerRef = useRef<T | null>(null);

  const isAddLinkVisible = useTargetVisibleState(addLinkRef, ({ target, setTargetVisibleState: set }) => {
    if (target && target.clientHeight <= document.documentElement.scrollTop) {
      set(false);
    } else {
      set(true);
    }
  });

  const isFooterVisible = useTargetVisibleState(footerRef, ({ target, isIntersecting, setTargetVisibleState: set }) => {
    if (target) {
      if (isIntersecting) set(true);
      else set(false);
    }
  });

  const shouldAddLinkLocateBottom = useMemo(
    () => !isAddLinkVisible && !isFooterVisible,
    [isAddLinkVisible, isFooterVisible],
  );

  return (
    <>
      <Header />
      <AddLink ref={addLinkRef} shouldAddLinkLocateBottom={shouldAddLinkLocateBottom} />
      <Article />
      <Footer footerRef={footerRef} />
    </>
  );
};

export default FolderPage;
