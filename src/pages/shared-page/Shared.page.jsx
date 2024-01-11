import DocumentTitle from '@layout/document-title/DocumentTitle';

import './Shared.css';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';
import { useGetUserFolders } from './hooks/useGetUserFolders';

const Shared = () => {
  const { links, userInfo } = useGetUserFolders();

  return (
    <>
      <DocumentTitle title='Shared' />
      <Header />
      <Banner userInfo={userInfo} />
      <Article links={links} />
      <Footer />
    </>
  );
};

export default Shared;
