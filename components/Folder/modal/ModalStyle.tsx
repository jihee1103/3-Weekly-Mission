import styled from "styled-components";

type ModalButtonProps = {
  $ColorRed?: boolean;
};

// AddModal
export const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 4rem;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  z-index: 10000;
`;

export const ModalClose = styled.button`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 28rem;
  gap: 0.8rem;

  & h1 {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & span {
    color: var(--Linkbrary-gray60, #9fa6b2);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const FolderListBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const FolderList = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;

  &:hover {
    background: #f0f6ff;
    cursor: pointer;

    & > span {
      color: #6d6afe;
    }
  }
`;

export const LinkCount = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ModalButton = styled.button<ModalButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
  padding: 1.6rem 2rem;
  gap: 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background: ${({ $ColorRed }) =>
    $ColorRed
      ? "#FF5B56"
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};

  & span {
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

// SortAddModal
export const Feature = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ContentInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;
