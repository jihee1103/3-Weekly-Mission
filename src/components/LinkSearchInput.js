import useModals from "../hooks/useModals";
import "./LinkSearchInput.css";
import Modals from "./Modals";
export default function LinkSearchInput() {
  const { openModal, closeModal, modal } = useModals();
  const handleOpenMoldalAddToFolder = () => {
    openModal({ type: "addToFolder", props: null });
  };
  return (
    <>
      <div className="header-content">
        <label className="link-search-box">
          <img src="/imgs/link.png" className="link-img" alt="링크추가기" />
          <input
            className="link-search-input"
            placeholder="링크를 추가해 보세요"
          ></input>
          <img
            onClick={handleOpenMoldalAddToFolder}
            src="/imgs/추가하기버튼.png"
            className="link-button-img"
            alt="링크추가 버튼"
          />
        </label>
      </div>
      <Modals modal={modal} closeModal={closeModal} />
    </>
  );
}
