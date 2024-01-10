import styled from "styled-components";

export default function SelectMenu() {
  return (
    <Wrapper>
      <div onClick={(e) => e.stopPropagation()}>삭제하기</div>
      <div onClick={(e) => e.stopPropagation()}>폴더에 추가</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 230px;
  left: 300px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 1;
  div {
    display: flex;
    padding: 7px 12px;
    justify-content: center;
    align-items: flex-start;
    width: 100px;
    background-color: white;

    &:hover {
      background-color: #e7effb;
      color: #6d6afe;
    }
  }
`;
