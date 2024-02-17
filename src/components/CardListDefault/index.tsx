import styled from "styled-components";

const CardListDefault = () => {
  return (
    <CardListDefaultContainer>
      <span>저장된 링크가 없습니다.</span>
    </CardListDefaultContainer>
  );
};
export default CardListDefault;

const CardListDefaultContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
`;
