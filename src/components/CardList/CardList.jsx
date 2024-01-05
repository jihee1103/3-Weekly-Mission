import styled from 'styled-components';

const CardListContainer = styled.div`
  padding: 40px 32px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardList = ({ children }) => {
  return <CardListContainer>{children}</CardListContainer>;
};

export default CardList;
