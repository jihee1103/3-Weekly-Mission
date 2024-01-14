import { useMemo } from 'react';

import PortalContainer from '@components/portal/Portal';
import FolderDeleteModal from '@components/ui/molecules/modal/folder-delete-modal/FolderDeleteModal';
import FolderEditModal from '@components/ui/molecules/modal/folder-edit-modal/FolderEditModal';
import FolderShareModal from '@components/ui/molecules/modal/folder-share-modal/FolderShareModal';

import { useModal } from '@hooks/useModal';

import styles from './CardContainerOptions.module.css';

const CardContainerOptions = () => {
  const { isModalOpen, toggleAndSetModal, ModalComponent } = useModal();

  // todo: 현재 폴더 네임 내려받기 혹은 주소에서~
  const folderOptions = useMemo(
    () => [
      { source: 'share', optionName: '공유', ModalComponent: FolderShareModal, folderName: '' },
      { source: 'pen', optionName: '이름 변경', ModalComponent: FolderEditModal, folderName: '폴더 네임' },
      { source: 'delete', optionName: '삭제', ModalComponent: FolderDeleteModal, folderName: '폴더 네임' },
    ],
    [],
  );

  return (
    <>
      <div className={styles['card-container-options-box']}>
        {folderOptions.map(({ ModalComponent, optionName, source, folderName }) => (
          <button
            type='button'
            className={styles['card-container-options-btn']}
            key={optionName}
            onClick={() => toggleAndSetModal({ ModalComponent, folderName })}
          >
            <img
              className={styles['card-container-options-icon']}
              src={`${process.env.PUBLIC_URL}/images/folder/${source}.svg`}
              alt={`${optionName} 기능 버튼`}
            />
            <span className={styles['card-container-options-text']}>{optionName}</span>
          </button>
        ))}
      </div>
      {isModalOpen && (
        <PortalContainer>
          <ModalComponent />
        </PortalContainer>
      )}
    </>
  );
};

export default CardContainerOptions;
