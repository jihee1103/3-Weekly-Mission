import DocumentTitle from '@layout/document-title/DocumentTitle';
import FolderContextProvider from '@pages/folder-page/context/FolderContextProvider';

import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';

const Folder = () => {
  return (
    <>
      <DocumentTitle title='Folder' />
      <FolderContextProvider>
        <Header />
        <AddLink />
        <Article />
        <Footer />
      </FolderContextProvider>
    </>
  );
};

export default Folder;
