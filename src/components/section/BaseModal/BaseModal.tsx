import { createPortal } from 'react-dom';
import './BaseModal.css';

const portalModal = document.getElementById('modal');

function BaseModal({ closeModal, children }) {
  const onClickClose = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      {createPortal(
        <div className='modal-container'>
          <div className='modal'>
            <img
              className='modal__close'
              src='./images/_close.png'
              alt='닫기 아이콘 x'
              onClick={onClickClose}
            />
            {children}
          </div>
        </div>,
        portalModal
      )}
    </>
  );
}
export default BaseModal;
