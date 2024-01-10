import { useGetFolderCategoryList } from './hooks/useGetFolderCategoryList';
import styles from './FolderLinkCategory.module.css';

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

  return (
    <>
      {folderSortList.length > 1 && (
        <div className={styles['folder-link-category-wrapper']}>
          <div className={styles['folder-link-category-box']}>
            {folderSortList.map((folder) => (
              <button
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
              </button>
            ))}
          </div>
          <button type='button' className={styles['folder-link-category-add-btn']}>
            <img
              className={styles['folder-link-category-btn-add-img']}
              src={`${process.env.PUBLIC_URL}/images/folder/folder-add.svg`}
              alt='폴더 카테고리 추가 버튼'
            />
          </button>
          <button type='button' className={styles['floating-category-add-btn']}>
            <span>폴더 추가</span>
            <img
              className={styles['folder-link-category-floating-btn-add-img']}
              src={`${process.env.PUBLIC_URL}/images/folder/floating-folder-add.svg`}
              alt='플로팅 폴더 카테고리 추가 버튼'
            />
          </button>
        </div>
      )}
    </>
  );
};
export default FolderLinkCategory;
