import styled from 'styled-components';

const HeroContainer = styled.div`
  box-sizing: border-box;
  background: var(--gray5);
  padding: 113px 32px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
