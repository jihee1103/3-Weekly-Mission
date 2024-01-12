import styled from "styled-components";
import { CTAButton } from "../CtaButton/CtaButton";

export const ModalButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  font-weight: 600;
  font-size: 16px;
  color: var(--Grey-Light, #f5f5f5);
  border: none;
`;

export const ModalNegativeButton = styled(ModalButton)`
  background: var(--Linkbrary-red, #ff5b56);
`;

export const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 20px;
  font-weight: 700;
`;

export const ModalShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalShareTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  gap: 8px;
  color: var(--Linkbrary-gray100, #373740);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const ModalShareFolderTitle = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 400;
`;

export const ModalCtaButton = styled(CTAButton)`
  padding: 16px 20px;
  width: 280px;
`;
