import styled from 'styled-components';
import AddFolder from './AddFolder';
import closeButton from '../../asset/close.svg';

export default function Modal({ toggleModalClick }) {
  const handleCloseButtonClick = () => {
    toggleModalClick();
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        <CloseButton src={closeButton} onClick={handleCloseButtonClick} />
        <AddFolder />
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
`;
const ModalContainer = styled.div`
  position: relative;
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
`;
const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
