import { useState } from "react";

export default function useModal() {
  const [modalState, setModalState] = useState({
    state: false,
    target: "",
    folderName: "",
    url: "",
  });

  const handleModalCancel = () =>
    setModalState({
      state: false,
    });

  return [modalState, setModalState, handleModalCancel];
}
