import styled from "styled-components";

export default function FolderSearchInput() {
  return (
    <StyledLabel>
      <img src="/imgs/Search.png" alt="링크검색버튼" />
      <input placeholder="링크를 검색해 보세요"></input>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  border: none;
  border-radius: 1rem;
  background: #f5f5f5;
  display: flex;
  padding: 15px 16px;
  height: 54px;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }

  input {
    margin-left: 10px;
    height: 100%;
    width: 100%;
    border: none;
    background: #f5f5f5;
  }
`;
