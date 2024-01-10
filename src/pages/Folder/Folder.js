import React, { useState } from "react";
import FolderSection from "../../components/FolderSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "react-modal";
import { ModalManager } from "../../components/ModalManager";

export default function Folder() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedModalItem, setSelectedModalItem] = useState(null);
  const openModal = (modalType, item) => {
    setActiveModal(modalType);
    setSelectedModalItem(item);
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Header onOpenModal={openModal} />
      <FolderSection onOpenModal={openModal} />
      <Footer />
      <Modal
        isOpen={!!activeModal}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <ModalManager
          modalType={activeModal}
          closeModal={closeModal}
          selectedModalItem={selectedModalItem}
        />
      </Modal>
    </>
  );
}
