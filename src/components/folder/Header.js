import React from "react";
import Nav from "./Nav.js";
import LinkSearchInput from "./LinkSearchInput.js";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Nav />
      <LinkSearchInput />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  background: var(--linkbrary-bg, #f0f6ff);
`;
