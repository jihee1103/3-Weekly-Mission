import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

interface HeaderProps {
  login: boolean;
  userData: {
    image_source: string;
    email: string;
  };
}

const Header = ({ login, userData }: HeaderProps) => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderLogoImgBox to="/">
          <img src={logo} alt="로고 이미지" />
        </HeaderLogoImgBox>
        {login ? (
          <HeaderProfileBox>
            <img src={userData.image_source} alt="프로필 이미지" />
            <div>{userData.email}</div>
          </HeaderProfileBox>
        ) : (
          <HeaderLoginInButton type="button">
            <Link to="/signin">로그인</Link>
          </HeaderLoginInButton>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};

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
    padding: 18px 32px 17px;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const HeaderLogoImgBox = styled(Link)`
  width: 133px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
    width: 88px;
    height: 16px;
  }
`;

const HeaderProfileBox = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 6px;
  }
  div {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 14px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const HeaderLoginInButton = styled.button`
  width: 128px;
  border-radius: 8px;
  padding: 16px 20px;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
`;

export default Header;
