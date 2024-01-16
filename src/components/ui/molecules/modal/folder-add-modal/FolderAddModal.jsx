import Modal from '..';

/**
 * @description 폴더 추가 모달
 */
const FolderAddModal = ({ modalName = '폴더 추가', closeModal }) => {
  return (
    <Modal.StModalBackground>
      <Modal.StModalWrapper>
        <Modal.StModalLabel htmlFor='folder-add'>
          {modalName}
          <Modal.StModalInput placeholder='내용 입력' id='folder-add' />
        </Modal.StModalLabel>
        <Modal.ModalCloseBtn closeModal={closeModal} />
        <Modal.StModalActionBtn>추가하기</Modal.StModalActionBtn>
      </Modal.StModalWrapper>
    </Modal.StModalBackground>
  );
};

export default FolderAddModal;
