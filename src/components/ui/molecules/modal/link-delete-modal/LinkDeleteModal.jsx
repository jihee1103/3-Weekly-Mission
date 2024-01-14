import Modal from '..';
import { StModalSubText } from '../StModalSubText';

const LinkDeleteModal = ({ modalText, linkUrl, closeModal }) => {
  return (
    <Modal.StModalBackground>
      <Modal.StModalWrapper $rowGap={2.4}>
        <Modal.StModalLabel as='div' $rowGap={0.8}>
          {modalText}
          <StModalSubText>{linkUrl}</StModalSubText>
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn />
        <Modal.StModalActionBtn $originalColor='red' onClick={closeModal}>
          삭제하기
        </Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalBackground>
  );
};

export default LinkDeleteModal;
