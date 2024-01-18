import React from "react";
import {
  ModalCtaButton,
  ModalInput,
  ModalTitle,
  ModalWrapper,
} from "./Modal.styled";
import CtaButton from "../CtaButton/CtaButton";

export default function ModalForm({ title, defaultPlace, buttonContent }) {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <ModalInput placeholder={defaultPlace} />
      <CtaButton CTAButtonStyle={ModalCtaButton}>{buttonContent}</CtaButton>
    </ModalWrapper>
  );
}
