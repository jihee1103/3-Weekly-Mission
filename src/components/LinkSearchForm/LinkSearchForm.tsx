import React from "react";
import imageData from "../../assets/imageData";
import styled from "styled-components";

export default function LinkSearchForm() {
  return (
    <Form>
      <Img src={imageData.searchIcon} alt="돋보기 아이콘" />
      <Input name="search" placeholder="링크를 검색해보세요." />
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
