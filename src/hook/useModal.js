import React, { createContext, useState, useContext } from "react";
import AddFolder from "../components/Modal/AddFolder";
import AddLink from "../components/Modal/AddLink";
import DeleteFolder from "../components/Modal/DeleteFolder";
import DeleteLink from "../components/Modal/DeleteLink";
import EditFolder from "../components/Modal/EditFolder";
import ShareFolder from "../components/Modal/ShareFolder";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const openModal = (type) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal === "addFolder" && <AddFolder />}
      {modal === "addLink" && <AddLink />}
      {modal === "deleteFolder" && <DeleteFolder />}
      {modal === "deleteLink" && <DeleteLink />}
      {modal === "editFolder" && <EditFolder />}
      {modal === "shareFolder" && <ShareFolder />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
