import styles from './DeleteMenu.module.css';

const DeleteMenu = () => {
  return (
    <button type='button' className={styles['delete-menu']}>
      삭제하기
    </button>
  );
};
export default DeleteMenu;
