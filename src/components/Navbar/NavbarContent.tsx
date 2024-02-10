import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import NavProfile from './NavProfile';

interface Props {
  userEmail: string;
  userProfileImg: string;
  isLoading: boolean;
  errorMessage: string;
}

export default function NavbarContent({
  userEmail,
  userProfileImg,
  isLoading,
  errorMessage,
}: Props) {
  if (isLoading) {
    return <Loading />;
  }
  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }
  if (!userEmail) {
    return (
      <HeaderLogin to="/">
        <HeaderLoginSpan>로그인</HeaderLoginSpan>
      </HeaderLogin>
    );
  }
  return <NavProfile userEmail={userEmail} userProfileImg={userProfileImg} />;
}

const HeaderLogin = styled(Link)`
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;
const HeaderLoginSpan = styled.span`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
`;
