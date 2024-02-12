import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode } from 'react';
import './BaseModal.css';

interface Props {
  closeModal: () => void;
  children: ReactNode;
}

const portalModal = document.getElementById('modal') as HTMLElement;

export default function BaseModal({ closeModal, children }: Props) {
  const onClickClose = (e: MouseEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      {createPortal(
        <div className="modal-container">
          <div className="modal">
            <img
              className="modal__close"
              src="/images/_close.png"
              alt="닫기 아이콘 x"
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
