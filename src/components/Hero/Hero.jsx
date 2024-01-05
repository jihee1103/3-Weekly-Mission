import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100vw;
  background: var(--gray5);
  padding: 113px 0 60px;
  display: flex;
  justify-content: center;
`;

const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
