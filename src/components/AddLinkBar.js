import { useState } from "react";
import useModal from "../hooks/useModal";
import "./AddLinkBar.css";
import Modal from "./Modal";
export default function AddLinkBar() {
  const [modalState, setModalState, handleModalCancel] = useModal();
  const [inputValue, setInputValue] = useState();

  const handleInput = (e) => setInputValue(e.target.value);

  return (
    <div className="form-container">
      <Modal state={modalState} onClick={handleModalCancel} link={inputValue} />
      <div className="add-link-form">
        <input
          className="add-link-input"
          placeholder="링크를 추가해 보세요"
          onBlur={handleInput}
        ></input>
        <button
          className="add-btn"
          onClick={(e) => {
            setModalState(() => ({ state: true, target: e.target.innerText }));
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}
