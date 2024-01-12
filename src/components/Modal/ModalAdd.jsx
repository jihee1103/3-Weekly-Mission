import React from "react";
import {
  ModalButton,
  ModalInput,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalAdd() {
  return (
    <ModalWrapper>
      <ModalTitle>폴더 추가</ModalTitle>
      <ModalInput placeholder={"내용 입력"} />
      <ModalButton>추가하기</ModalButton>
    </ModalWrapper>
  );
}
