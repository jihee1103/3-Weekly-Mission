import styled from "styled-components";
import linkbrary from "./linkbrary.svg";
import FolderPageHeaderProfile from "../FolderPageHeaderProfile";

const FolderPageHeaderNavigation = () => {
  return (
    <HeaderWrapper>
      <img src={linkbrary} alt="linkbrary 로고 이미지" />
      <FolderPageHeaderProfile />
    </HeaderWrapper>
  );
};
export default FolderPageHeaderNavigation;

const HeaderWrapper = styled.nav`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
