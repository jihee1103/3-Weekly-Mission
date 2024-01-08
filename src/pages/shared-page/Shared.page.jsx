import Header from './comp/header/Header';
import Footer from './comp/footer/Footer';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import { useGetUserFolders } from './hooks/useGetUserFolders';
import './Shared.css';
import DocumentTitle from '@layout/document-title/DocumentTitle';

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
