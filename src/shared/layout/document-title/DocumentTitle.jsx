import { Fragment } from 'react';

import { useSetDocumentTitle } from '@layout/document-title/hooks/useSetDocumentTitle';

import { documentTitle } from './data/documentTitle';

/**
 *
 * @param {{title: string, children: React.ReactNode}} param0
 */
const DocumentTitle = ({ title, children }) => {
  useSetDocumentTitle(`${documentTitle} ${title}`);

  return <Fragment>{children}</Fragment>;
};

export default DocumentTitle;
