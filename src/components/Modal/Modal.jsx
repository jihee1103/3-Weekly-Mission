import React from "react";
import styled from "styled-components";
import imageData from "../../utils/imageData";
import ModalShare from "./ModalShare/ModalShare";
import ModalDelete from "./ModalDelete";
import ModalForm from "./ModalForm";

export default function Modal({ folderName, modalId, toggleModalClick }) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCloseButton
          src={imageData.closeButton}
          alt="모달창 닫기 버튼"
          onClick={toggleModalClick}
        />
        {getModalContent(modalId, folderName)}
      </ModalContainer>
    </ModalWrapper>
  );
}

const getModalContent = (modalId, folderName) => {
  switch (modalId) {
    case "addFolder":
      return (
        <ModalForm
          title={"폴더 추가"}
          defaultPlace={"내용 입력"}
          buttonContent={"추가하기"}
        />
      );
    case "editFolder":
      return (
        <ModalForm
          title={"폴더 이름 변경"}
          defaultPlace={folderName}
          buttonContent={"변경하기"}
        />
      );
    case "shareFolder":
      return <ModalShare folderName={folderName} />;
    case "deleteFolder":
      return <ModalDelete />;

    default:
      return;
  }
};

const ModalCloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 7;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

const ModalContainer = styled.div`
  position: relative;
  display: inline-flex;
  padding: 32px 40px;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;
