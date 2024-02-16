import { useContext } from "react";
import { SharedPageStateContext } from "../../page/SharedPage";
import styled from "styled-components";

const SharedPageHeaderUserInfo = () => {
  const context = useContext(SharedPageStateContext);
  if (
    !context ||
    !context.folderData ||
    !context.folderData.folder ||
    !context.folderData.folder.owner
  ) {
    return null;
  }

  const { folderData } = context;

  return (
    <>
      <UserInfoContainer>
        <img
          src={folderData.folder.owner.profileImageSource}
          alt="폴더 소유자 프로필 이미지"
        />
        <span>{folderData.folder.owner.name}</span>
        <h1>{folderData.folder.name}</h1>
      </UserInfoContainer>
    </>
  );
};

export default SharedPageHeaderUserInfo;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 40px;

  span {
    margin-top: 10px;
  }

  h1 {
    margin-top: 20px;
  }

  img {
    height: 60px;
  }
`;
