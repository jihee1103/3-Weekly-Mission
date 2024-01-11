import Modal from "react-modal";
import { ModalManager } from "./ModalManager";

export default function Modals({ modal, closeModal }) {
  if (!modal) return null;
  return (
    <Modal
      isOpen={!!modal.type}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay"
    >
      <ModalManager
        modalType={modal.type}
        closeModal={closeModal}
        selectedModalItem={modal.props}
      />
    </Modal>
  );
}
