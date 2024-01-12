import React from "react";
import {
  ModalNegativeButton,
  ModalShareFolderTitle,
  ModalShareTitleContainer,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalDelete({ folderName = "폴더명" }) {
  return (
    <ModalWrapper>
      <ModalShareTitleContainer>
        <ModalTitle>폴더 삭제</ModalTitle>
        <ModalShareFolderTitle>{folderName}</ModalShareFolderTitle>
      </ModalShareTitleContainer>
      <ModalNegativeButton>삭제하기</ModalNegativeButton>
    </ModalWrapper>
  );
}
