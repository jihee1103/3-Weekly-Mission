import styled from 'styled-components';
import SearchIconImg from '/public/SearchIcon.svg';
import DeleteIconImg from '/public/search-delete.svg';
import { ChangeEvent } from 'react';
import Image from 'next/image';

interface Props {
  searchInputValue: string;
  updateSearchInputValue: (value: string) => void;
}

export default function SearchBar({
  searchInputValue,
  updateSearchInputValue,
}: Props) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchInputValue(e.target.value);
  };
  const handleClickDeleteIcon = () => {
    updateSearchInputValue('');
  };

  return (
    <Form onReset={handleClickDeleteIcon}>
      <InputWrapper htmlFor="searchValue">
        <SearchIcon src={SearchIconImg} alt="Search-icon" />
        <Input
          id="searchValue"
          type="search"
          placeholder="링크를 검색해 보세요."
          value={searchInputValue}
          onChange={handleInputChange}
        />
        {searchInputValue ? <DeleteIcon type="reset" /> : null}
      </InputWrapper>
    </Form>
  );
}

const Form = styled.form`
  width: 1060px;
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  @media (max-width: 1199px) {
    & {
      width: 704px;
    }
  }
  @media (max-width: 767px) {
    & {
      width: 325px;
    }
  }
`;
const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 54px;
  text-align: center;
  background-color: #f5f5f5;
  padding: 15px 16px;
  border-radius: 10px;
  @media (max-width: 767px) {
    & {
      height: 43px;
      padding: 13px 16px;
    }
  }
`;
const SearchIcon = styled(Image)`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f5f5f5;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  @media (max-width: 767px) {
    & {
      font-size: 14px;
      line-height: normal;
    }
  }
`;
const DeleteIcon = styled.button`
  background-image: url(${DeleteIconImg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 100%;
  cursor: pointer;
`;
