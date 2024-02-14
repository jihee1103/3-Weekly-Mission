import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode } from 'react';
import styles from './BaseModal.module.css';

interface Props {
  closeModal: () => void;
  children: ReactNode;
}

export default function BaseModal({ closeModal, children }: Props) {
  const portalModal = document.getElementById('modal') as HTMLElement;

  const onClickClose = (e: MouseEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      {createPortal(
        <div className={styles['modal-container']}>
          <div className={styles['modal']}>
            <img
              className={styles['modal__close']}
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
