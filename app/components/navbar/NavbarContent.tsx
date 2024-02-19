import styled from 'styled-components';
import NavProfile from './NavProfile';
import Link from 'next/link';

interface Props {
  userEmail: string;
  userProfileImg: string;
}

export default function NavbarContent({ userEmail, userProfileImg }: Props) {
  if (!userEmail) {
    return (
      <HeaderLogin href="/">
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
