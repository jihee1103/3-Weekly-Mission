import styled from "styled-components";
import linkbrary from "./linkbrary.svg";
import SharedPageHeaderProfile from "../SharedPageHeaderProfile";

const SharedPageHeaderNavigation = () => {
  return (
    <HeaderWrapper>
      <img src={linkbrary} alt="linkbrary 로고 이미지" />
      <SharedPageHeaderProfile />
    </HeaderWrapper>
  );
};
export default SharedPageHeaderNavigation;

const HeaderWrapper = styled.nav`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
