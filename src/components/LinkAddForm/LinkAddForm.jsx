import React from "react";
import styled from "./LinkAddForm.module.css";
import chainIcon from "../../assets/images/link.svg";
import CtaButton from "../CtaButton/CtaButton";

export default function LinkAddForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <img src={chainIcon} alt="링크 추가하기 아이콘" />
      <input placeholder="링크를 추가해 보세요." />
      <CtaButton>추가하기</CtaButton>
    </form>
  );
}
