import styled from "styled-components";
import HeaderProfile from "../HeaderProfile";
import linkbrary from "./linkbrary.svg";

const HeaderNavigation = () => {
  return (
    <HeaderWrapper>
      <img src={linkbrary} alt="linkbrary 로고 이미지" />
      <HeaderProfile />
    </HeaderWrapper>
  );
};
export default HeaderNavigation;

const HeaderWrapper = styled.nav`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
