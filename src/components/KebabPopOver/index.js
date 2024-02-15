import styled from "styled-components";

const KebabPopOver = () => {
  return (
    <PopOverContainer>
      <li>
        <span>삭제하기</span>
      </li>
      <li>
        <span>폴더에 추가</span>
      </li>
    </PopOverContainer>
  );
};
export default KebabPopOver;

const PopOverContainer = styled.ul`
  list-style: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 3px;
  width: 120px;

  position: absolute;
  top: 15px;
  right: 15px;

  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    align-items: center;
    box-sizing: border-box;

    span {
      font-size: 14px;
      color: #676767;
    }

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
