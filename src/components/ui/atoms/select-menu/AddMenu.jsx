import styles from './AddMenu.module.css';

const AddMenu = () => {
  return (
    <button type='button' className={styles['add-menu']}>
      폴더에 추가
    </button>
  );
};
export default AddMenu;
