import React from "react";
import {
  ModalButton,
  ModalInput,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalEdit() {
  return (
    <ModalWrapper>
      <ModalTitle>폴더 이름 변경</ModalTitle>
      <ModalInput placeholder={"유용한 팁"} />
      <ModalButton>변경하기</ModalButton>
    </ModalWrapper>
  );
}
