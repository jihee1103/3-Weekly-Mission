import React from "react";
import { ModalInput, ModalTitle, ModalWrapper } from "./Modal.styled";
import styled from "styled-components";
import CtaButton, { CTAButton } from "../CtaButton/CtaButton";

export default function ModalAdd() {
  return (
    <ModalWrapper>
      <ModalTitle>폴더 추가</ModalTitle>
      <ModalInput placeholder={"내용 입력"} />
      <CtaButton CTAButtonStyle={ModalCtaButton}>추가하기</CtaButton>
    </ModalWrapper>
  );
}

const ModalCtaButton = styled(CTAButton)`
  padding: 16px 20px;
  width: 280px;
`;
