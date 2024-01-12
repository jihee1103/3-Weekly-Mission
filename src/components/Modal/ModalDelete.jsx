import React from "react";
import {
  ModalNegativeButton,
  ModalShareFolderTitle,
  ModalShareTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalDelete({ nameType, DeleteName }) {
  return (
    <ModalWrapper>
      <ModalShareTitleContainer>
        <ModalTitle>{nameType} 삭제</ModalTitle>
        <ModalShareFolderTitle>{DeleteName}</ModalShareFolderTitle>
      </ModalShareTitleContainer>
      <ModalNegativeButton>삭제하기</ModalNegativeButton>
    </ModalWrapper>
  );
}
