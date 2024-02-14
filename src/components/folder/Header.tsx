import Nav from "./Nav";
import LinkAddInput from "./LinkAddInput";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav />
      <LinkAddInput />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  height: 374px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  background: var(--linkbrary-bg, #f0f6ff);
`;
