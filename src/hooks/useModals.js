import { useState } from "react";

export default function useModals() {
  const [modal, setModal] = useState({
    type: "",
    props: null,
  });

  const openModal = (modal) => {
    setModal(modal);
  };
  const closeModal = () => {
    setModal(null);
  };

  return {
    openModal,
    closeModal,
    modal,
  };
}
