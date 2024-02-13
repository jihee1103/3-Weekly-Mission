import { ReactNode } from 'react';
import styled from 'styled-components';

const Contents = ({ children }: { children: ReactNode }) => {
  return <ContentsWrapper>{children}</ContentsWrapper>;
};

const ContentsWrapper = styled.div`
  padding: 40px 32px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 20px 32px;
    margin-bottom: 40px;
  }
`;

export default Contents;
