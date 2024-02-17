import styled from "styled-components";

// Header.tsx
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

export const HeaderLinkBox = styled.div`
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

// Section.tsx
export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144rem;
  padding: 6rem 32rem 9rem;
  vertical-align: middle;
  gap: 0.8rem;
  background: #f0f6ff;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76rem;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
`;

export const SectionLinkBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBoxImg = styled.div`
  height: 100%;
  margin-right: 1.2rem;
`;

export const SectionInput = styled.input`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-family: Pretendard;
  font-size: 16px;
  border: none;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  padding: 1rem 1.6rem;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;

export const AddText = styled.span`
  color: var(--grey-light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
