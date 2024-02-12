import styled from "styled-components";
import searchIcon from "./search.svg";

const SearchLinkBar = () => {
  return (
    <>
      <SearchLinkInput type="search" placeholder="링크를 검색해 보세요." />
    </>
  );
};
export default SearchLinkBar;

const SearchLinkInput = styled.input`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;
  width: 1060px;
  height: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 50px;

  background: #f5f5f5 url(${searchIcon}) no-repeat left 20px center;
`;
