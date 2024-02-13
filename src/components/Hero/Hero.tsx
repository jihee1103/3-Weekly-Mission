import { ReactNode } from 'react';
import styled from 'styled-components';

const Hero = ({ children }: { children: ReactNode }) => {
  return <HeroWrapper>{children}</HeroWrapper>;
};

const HeroWrapper = styled.div`
  box-sizing: border-box;
  background: var(--gray5);
  padding: 113px 32px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    padding: 87px 32px 40px;
  }
`;

export default Hero;
