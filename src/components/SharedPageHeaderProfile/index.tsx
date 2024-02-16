import styled from "styled-components";
import { SharedPageStateContext } from "../../page/SharedPage";
import { useContext } from "react";

const SharedPageHeaderProfile = () => {
  const context = useContext(SharedPageStateContext);
  if (!context || !context.userData) {
    return null;
  }
  const { userData } = context;

  return (
    <HeaderProfileWrapper>
      {userData && <ProfileImage src={userData.profileImageSource} />}
      <Email>{userData && userData.email}</Email>
    </HeaderProfileWrapper>
  );
};
export default SharedPageHeaderProfile;

const HeaderProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Email = styled.span`
  color: #373740;
  font-size: 14px;
  font-weight: 400;
`;
