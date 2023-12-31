import HeaderAndFooter from '../../shared/layout/header&footer/HeaderAndFooter';
import Article from './comp/article/Article';
import Banner from './comp/banner/Banner';
import './Shared.css';

const Shared = () => {
  return (
    <HeaderAndFooter>
      <Banner />
      <Article />
    </HeaderAndFooter>
  );
};
export default Shared;
