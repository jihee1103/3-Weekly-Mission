import React from "react";
import searchIcon from "../../assets/images/shared-search.svg";
import styled from "./SearchForm.module.css";

export default function LinkSearchForm() {
  return (
    <form className={styled.form}>
      <img src={searchIcon} alt="돋보기 아이콘" />
      <input name="search" placeholder="링크를 검색해보세요." />
    </form>
  );
}
