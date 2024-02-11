import styled from 'styled-components';
import SearchIconImg from '../../asset/SearchIcon.svg';
import DeleteIconImg from '../../asset/search-delete.svg';
import { ChangeEvent } from 'react';

interface Props {
  searchInputValue: string;
  updateSearchInputValue: (value: string) => void;
}

export default function SearchBar({
  searchInputValue,
  updateSearchInputValue,
}: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchInputValue(e.target.value);
  };
  const handleClickDeleteIcon = () => {
    updateSearchInputValue('');
  };
  return (
    <Form>
      <InputWrapper htmlFor="searchValue">
        <SearchIcon src={SearchIconImg} alt="SearchIcon" />
        <Input
          id="searchValue"
          type="text"
          placeholder="링크를 검색해 보세요."
          value={searchInputValue}
          onChange={onChange}
        />
        <DeleteIcon
          src={DeleteIconImg}
          alt="DeleteIcon"
          onClick={handleClickDeleteIcon}
        />
      </InputWrapper>
    </Form>
  );
}

const Form = styled.form`
  width: 1060px;
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
const SearchIcon = styled.img`
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
const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
