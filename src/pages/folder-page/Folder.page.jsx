import DocumentTitle from '@layout/document-title/DocumentTitle';
import Header from './comp/header/Header';
import Footer from './comp/footer/Footer';
import AddLink from './comp/add-link/AddLink';
import Article from './comp/article/Article';

const Folder = () => {
  return (
    <>
      <DocumentTitle title='Folder' />
      <Header />
      <AddLink />
      <Article />
      <Footer />
    </>
  );
};

export default Folder;
