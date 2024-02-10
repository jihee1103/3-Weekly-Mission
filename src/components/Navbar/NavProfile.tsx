import styled from 'styled-components';

interface Props {
  userEmail: string;
  userProfileImg: string;
}

export default function NavProfile({ userEmail, userProfileImg }: Props) {
  return (
    <HeaderProfile>
      <HeaderProfileImg src={userProfileImg} alt="profile" />
      <HeaderProfileEmail>{userEmail}</HeaderProfileEmail>
    </HeaderProfile>
  );
}

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const HeaderProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const HeaderProfileEmail = styled.span`
  font-size: 14px;
  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
`;
