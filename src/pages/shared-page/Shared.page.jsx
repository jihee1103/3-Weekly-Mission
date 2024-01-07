import Header from '@layout/header&footer/comp/header/Header';
import Footer from '@layout/header&footer/comp/footer/Footer';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import { useGetUserFolders } from './hooks/useGetUserFolders';
import './Shared.css';

const Shared = () => {
  const { links, userInfo } = useGetUserFolders();

  return (
    <>
      <Header />
      <Banner userInfo={userInfo} />
      <Article links={links} />
      <Footer />
    </>
  );
};
export default Shared;
