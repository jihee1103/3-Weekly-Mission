import styled from "styled-components";

const KebabPopOver = () => {
  return (
    <PopOverContainer>
      <li>
        <span>삭제하기</span>
        <span>폴더에 추가</span>
      </li>
    </PopOverContainer>
  );
};
export default KebabPopOver;

const PopOverContainer = styled.ul`
  position: absolute;
  list-style: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;

  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;
