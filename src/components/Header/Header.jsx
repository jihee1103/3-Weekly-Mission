import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderProfile from './HeaderProfile/HeaderProfile';

const HeaderWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 200px;
  background: var(--gray5);
  position: fixed;
  z-index: 9999;

  @media (max-width: 1123px) and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1123px) and (min-width: 768px) {
    width: 800px;
  }

  @media (max-width: 864px) {
    width: auto;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = ({ login, userData }) => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Link to="/" className="header__img">
          <LogoImg src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="로고 이미지" />
        </Link>
        <HeaderProfile login={login} userData={userData} />
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;
