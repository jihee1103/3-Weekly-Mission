import Modal from '..';

const FolderAddModal = ({ modalText }) => {
  return (
    <Modal.StModalBackground>
      <Modal.StModalWrapper>
        <Modal.StModalLabel htmlFor='folder-add'>
          {modalText}
          <Modal.StModalInput placeholder='내용 입력' id='folder-add' />
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn />
        <Modal.StModalActionBtn>추가하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalBackground>
  );
};

export default FolderAddModal;
