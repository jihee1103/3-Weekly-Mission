import styled from "styled-components";

// Header.tsx
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  height: 9.4rem;
  padding: 0 20rem;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileBoxImg = styled.img`
  width: 5rem;
`;

export const ProfileName = styled.div`
  margin-left: 0.6rem;
  color: var(--gray100, #373740);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
