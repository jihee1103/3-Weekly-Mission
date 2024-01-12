import React from "react";
import {
  ModalFolderTitle,
  ModalTitleContainer,
  ModalTitle,
  ModalWrapper,
  ModalCtaButton,
} from "../Modal.styled";
import styled from "styled-components";
import AddFolderListBox from "./AddFolderListBox";
import CtaButton from "../../CtaButton/CtaButton";

export default function ModalAddLink({ url, itemList }) {
  return (
    <ModalWrapper>
      <ModalTitleContainer>
        <ModalTitle>폴더에 추가</ModalTitle>
        <ModalFolderTitle>{url}</ModalFolderTitle>
      </ModalTitleContainer>
      <BoxContainer>
        {itemList &&
          itemList.map((item) => {
            return (
              <AddFolderListBox
                key={item.id}
                name={item.name}
                count={item.link.count}
              ></AddFolderListBox>
            );
          })}
      </BoxContainer>
      <CtaButton CTAButtonStyle={ModalCtaButton}>추가하기</CtaButton>
    </ModalWrapper>
  );
}
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
