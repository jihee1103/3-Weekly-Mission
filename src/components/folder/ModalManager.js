import React from "react";
import {
  AddToFolderModal,
  AddFolderModal,
  ShareModal,
  RenameModal,
  DeleteFolderModal,
  DeleteItemModal,
} from "./ModalContent";

export const ModalManager = ({ modalType, closeModal, selectedModalItem }) => {
  switch (modalType) {
    case "addToFolder":
      return <AddToFolderModal closeModal={closeModal} />;
    case "addFolder":
      return <AddFolderModal closeModal={closeModal} />;
    case "share":
      return (
        <ShareModal
          closeModal={closeModal}
          selectedModalItem={selectedModalItem}
        />
      );
    case "rename":
      return (
        <RenameModal
          closeModal={closeModal}
          selectedModalItem={selectedModalItem}
        />
      );
    case "deleteFolder":
      return (
        <DeleteFolderModal
          closeModal={closeModal}
          selectedModalItem={selectedModalItem}
        />
      );
    case "deleteItem":
      return (
        <DeleteItemModal
          closeModal={closeModal}
          selectedModalItem={selectedModalItem}
        />
      );
    default:
      return null;
  }
};
