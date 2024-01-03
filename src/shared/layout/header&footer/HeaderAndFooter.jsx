import Footer from './comp/footer/Footer';
import Header from './comp/header/Header';

const HeaderAndFooter = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default HeaderAndFooter;
