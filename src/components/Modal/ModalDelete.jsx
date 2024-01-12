import React from "react";
import {
  ModalNegativeButton,
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalDelete({ nameType, DeleteName }) {
  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>{nameType} 삭제</ModalTitle>
        <ModalFolderTitle>{DeleteName}</ModalFolderTitle>
      </ModalTitleContainer>
      <ModalNegativeButton>삭제하기</ModalNegativeButton>
    </ModalWrapper>
  );
}
