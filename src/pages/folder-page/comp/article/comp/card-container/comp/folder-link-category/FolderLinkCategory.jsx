import { NavLink } from 'react-router-dom';

import PortalContainer from '@components/portal/Portal';
import FolderAddModal from '@components/ui/molecules/modal/folder-add-modal/FolderAddModal';
import { useFolderContext } from '@pages/folder-page/context/FolderContextProvider';

import { useModal } from '@hooks/useModal';

import styles from './FolderLinkCategory.module.css';
import { useGetFolderCategoryList } from './hooks/useGetFolderCategoryList';

// {
//   "id": 14, ---> 이게 folder id 인듯?
//   "created_at": "2023-06-04T20:59:39.293024+00:00",
//   "name": "⭐️ 즐겨찾기",
//   "user_id": 1,
//   "favorite": true,
//   "link": {
//     "count": 0
//   }
// },

const FolderLinkCategory = ({ selectedFolderId, handleFolderIdAndName }) => {
  const folderSortList = useGetFolderCategoryList();

  const { ModalComponent, isModalOpen, toggleAndSetModal } = useModal();

  const {
    folderPageInfos: { userId },
  } = useFolderContext();

  return (
    <>
      {folderSortList.length > 1 && (
        <>
          <div className={styles['folder-link-category-wrapper']}>
            <div className={styles['folder-link-category-box']}>
              {folderSortList.map((folder) => (
                <NavLink
                  to={{ search: `user=${userId}&folder=${folder.id}` }}
                  type='button'
                  className={`${styles['folder-link-category-btn']} ${
                    selectedFolderId === folder.id ? styles.selected : ''
                  }`}
                  key={folder.id}
                  onClick={() =>
                    handleFolderIdAndName({
                      folderId: folder.id,
                      folderName: folder.name,
                    })
                  }
                >
                  {folder.name}
                </NavLink>
              ))}
            </div>
            <button
              type='button'
              className={styles['folder-link-category-add-btn']}
              onClick={() => toggleAndSetModal({ ModalComponent: FolderAddModal })} // no event dispatch
            >
              <img
                className={styles['folder-link-category-btn-add-img']}
                src={`${process.env.PUBLIC_URL}/images/folder/folder-add.svg`}
                alt='폴더 카테고리 추가 버튼'
              />
            </button>
            <button
              type='button'
              className={styles['floating-category-add-btn']}
              onClick={() => toggleAndSetModal({ ModalComponent: FolderAddModal })}
            >
              <span>폴더 추가</span>
              <img
                className={styles['folder-link-category-floating-btn-add-img']}
                src={`${process.env.PUBLIC_URL}/images/folder/floating-folder-add.svg`}
                alt='플로팅 폴더 카테고리 추가 버튼'
              />
            </button>
          </div>
          {isModalOpen && (
            <PortalContainer>
              <ModalComponent />
            </PortalContainer>
          )}
        </>
      )}
    </>
  );
};

export default FolderLinkCategory;
