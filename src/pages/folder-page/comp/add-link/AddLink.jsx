import PortalContainer from '@components/portal/Portal';
import AddToFolderModal from '@components/ui/molecules/modal/add-to-folder-modal/AddToFolderModal';

import { useInput } from '@hooks/useInput';
import { useModal } from '@hooks/useModal';

import styles from './AddLink.module.css';

const AddLink = () => {
  // 폴더 이름들을 받아야 함.
  // 폴더 내부의 링크의 개수를 받아야 함.
  const [input, onChange, clearInput] = useInput();
  const { ModalComponent, isModalOpen, toggleAndSetModal } = useModal();

  return (
    <>
      <section className={styles['add-link-area']}>
        <div className={styles['add-link-box']}>
          <div className={styles['add-link-input-box']}>
            <img
              className={styles['add-link-img']}
              src={`${process.env.PUBLIC_URL}/images/folder/folder-link.svg`}
              alt='폴더 링크 추가 아이콘'
            />
            <input
              className={styles['add-link-input']}
              type='text'
              placeholder='링크를 추가해 보세요'
              onChange={onChange}
              value={input}
            />
          </div>
          <button
            type='button'
            className={styles['add-link-cta']}
            onClick={() =>
              toggleAndSetModal({ linkUrl: input, ModalComponent: AddToFolderModal, closeModalCallback: clearInput })
            }
          >
            추가하기
          </button>
        </div>
      </section>
      {isModalOpen && (
        <PortalContainer>
          <ModalComponent />
        </PortalContainer>
      )}
    </>
  );
};

export default AddLink;
