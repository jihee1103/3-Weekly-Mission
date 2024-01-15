import styled from 'styled-components';
import modalClose from '../../../assets/images/_close.svg';
import { modalInit } from '../../../data';

const ModalCloseButton = ({ modal, setModal }) => {
  const handleModalClose = () => {
    setModal(modalInit);
  };

  return (
    <StyledModalCloseButton type="button" onClick={handleModalClose}>
      <img src={modalClose} alt="모달 닫기 버튼" />
    </StyledModalCloseButton>
  );
};

const StyledModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;

  &img {
    width: 100%;
    height: 100%;
  }
`;

export default ModalCloseButton;
