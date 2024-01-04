import Footer from '../../shared/layout/header&footer/comp/footer/Footer';
import Header from '../../shared/layout/header&footer/comp/header/Header';
import './Shared.css';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import { useGetUserFolders } from './hooks/useGetUserFolders';

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
