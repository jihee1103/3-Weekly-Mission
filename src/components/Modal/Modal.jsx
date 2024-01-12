import React from "react";
import styled from "styled-components";
import ModalEdit from "./ModalEdit";
import imageData from "../../utils/imageData";
import ModalAdd from "./ModalAdd";
import ModalShare from "./ModalShare";
import ModalDelete from "./ModalDelete";

export default function Modal({ modalId, toggleModalClick }) {
  const getModalContent = () => {
    console.log(modalId);
    switch (modalId) {
      case "addFolder":
        return <ModalAdd />;
      case "editFolder":
        return <ModalEdit />;
      case "shareFolder":
        return <ModalShare />;
      default:
        return <ModalDelete />;
    }
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCloseButton
          src={imageData.closeButton}
          alt="버튼임"
          onClick={toggleModalClick}
        />
        {getModalContent()}
      </ModalContainer>
    </ModalWrapper>
  );
}

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
