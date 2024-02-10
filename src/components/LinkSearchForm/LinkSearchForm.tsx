import React, { FormEvent } from "react";
import imageData from "../../assets/imageData";
import styled from "styled-components";
import { CardItem } from "../../types/dataTypes";
import { VoidFunc } from "../../types/functionType";

interface Props {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  filterCardList: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setCardListItem: VoidFunc;
}

export default function LinkSearchForm({
  searchName,
  setSearchName,
  filterCardList,
  setIsSearch,
  setCardListItem,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterCardList((prvItem) => {
      const filterItem =
        prvItem?.filter(
          (item) =>
            (item.description && item.description.includes(searchName)) ||
            (item.title && item.title.includes(searchName)) ||
            item.url.includes(searchName)
        ) || [];
      return filterItem;
    });
    setIsSearch(true);
  };

  const handleCloseClick = () => {
    setIsSearch(false);
    setSearchName("");
    setCardListItem();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Img src={imageData.searchIcon} alt="돋보기 아이콘" />
      <Input
        name="search"
        placeholder="링크를 검색해보세요."
        value={searchName}
        onChange={handleChange}
      />
      {searchName ? (
        <CloseButton type="button" onClick={handleCloseClick}>
          <img src={imageData.closeButton} alt="검색삭제하기버튼" />
        </CloseButton>
      ) : null}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 106rem;
  width: 100%;
  margin-top: 4rem;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 15px 16px;
  margin: 0 auto;
  @media screen and (max-width: 1124px) {
    max-width: 704px;
  }

  @media screen and (max-width: 765px) {
    max-width: 325px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  left: 16px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
`;
