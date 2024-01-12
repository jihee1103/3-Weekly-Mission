import React from "react";
import {
  ModalNegativeButton,
  ModalShareFolderTitle,
  ModalShareTitleContainer,
  ModalWrapper,
} from "./Modal.styled";

export default function ModalDelete({ folderName = "폴더명" }) {
  return (
    <ModalWrapper>
      <ModalShareTitleContainer>
        폴더 삭제
        <ModalShareFolderTitle>{folderName}</ModalShareFolderTitle>
      </ModalShareTitleContainer>
      <ModalNegativeButton>삭제하기</ModalNegativeButton>
    </ModalWrapper>
  );
}
