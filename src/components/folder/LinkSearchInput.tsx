import styled from "styled-components";
import { LinkSearchInputProps } from "../../types";

export default function LinkSearchInput({
  setSearchTerm,
  searchTerm,
}: LinkSearchInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <StyledLabel>
      <img src="/imgs/Search.png" alt="링크검색버튼" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요"
      ></input>
      {searchTerm && (
        <button className="clear-button" onClick={clearSearchTerm}>
          <img src="/imgs/close-icon.svg" alt="Clear search" />
        </button>
      )}
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
    outline: none;
    margin-left: 10px;
    height: 100%;
    width: 100%;
    border: none;
    background: #f5f5f5;
  }
`;
