import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

import FolderAddModal from '@components/ui/molecules/modal/folder-add-modal/FolderAddModal';

import { useModal } from '@hooks/useModal';

import styles from './FolderLinkCategory.module.css';
import { useGetFolderCategoryList } from './hooks/useGetFolderCategoryList';

import { useFolderStore } from '@/store/folderStore';

type TFolderLinkCategoryProps = {
  selectedFolderId: number | 'total';
  handleFolderIdAndName: Dispatch<
    SetStateAction<{
      folderId: 'total' | number;
      folderName: string;
    }>
  >;
};

const FolderLinkCategory = ({ selectedFolderId, handleFolderIdAndName }: TFolderLinkCategoryProps) => {
  const folderSortList = useGetFolderCategoryList();

  const { openModal } = useModal();

  // userId는 걍 로컬 스토리지에 저장하고 가져오는 게 좋을까?
  const userId = useFolderStore((state) => state.userId);

  return (
    <>
      {folderSortList.length > 1 && (
        <div className={styles['folder-link-category-wrapper']}>
          <div className={styles['folder-link-category-box']}>
            {folderSortList.map((folder) => (
              <NavLink
                // ? userId에는 현재 로그인 중인 유저 id를 넣기. 가 맞나?
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
            onClick={() => openModal({ Component: FolderAddModal })} // no event dispatch
          >
            <img
              className={styles['folder-link-category-btn-add-img']}
              src={'/images/folder/folder-add.svg'}
              alt='폴더 카테고리 추가 버튼'
            />
          </button>

          {/* on mobile size */}
          <button
            type='button'
            className={styles['floating-category-add-btn']}
            onClick={() => openModal({ Component: FolderAddModal })}
          >
            <span>폴더 추가</span>
            <img
              className={styles['folder-link-category-floating-btn-add-img']}
              src={'/images/folder/floating-folder-add.svg'}
              alt='플로팅 폴더 카테고리 추가 버튼'
            />
          </button>
        </div>
      )}
    </>
  );
};

export default FolderLinkCategory;
