"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import AddFolder from "../components/Modal/AddFolder";
import AddLink from "../components/Modal/AddLink";
import DeleteFolder from "../components/Modal/DeleteFolder";
import DeleteLink from "../components/Modal/DeleteLink";
import EditFolder from "../components/Modal/EditFolder";
import ShareFolder from "../components/Modal/ShareFolder";
import { ModalContextType } from "../utils/types";

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState<string | null>(null);

  const openModal = (type: string) => {
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

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
