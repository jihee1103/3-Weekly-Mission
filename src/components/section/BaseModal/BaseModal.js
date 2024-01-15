import "./BaseModal.css";

function BaseModal({ closeModal, children }) {
  const onClickClose = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <img
          className="modal__close"
          src="./images/_close.png"
          alt="닫기 아이콘 x"
          onClick={onClickClose}
        />
        {children}
      </div>
    </div>
  );
}
export default BaseModal;
