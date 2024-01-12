import styled from "styled-components";

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
