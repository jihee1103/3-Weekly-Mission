import styles from './AddLink.module.css';

const AddLink = () => {
  return (
    <section className={styles['add-link-area']}>
      <div className={styles['add-link-box']}>
        <div className={styles['add-link-input-box']}>
          <img
            className={styles['add-link-img']}
            src={`${process.env.PUBLIC_URL}/images/folder/folder-link.svg`}
            alt='폴더 링크 추가 아이콘'
          />
          <input className={styles['add-link-input']} type='text' placeholder='링크를 추가해 보세요' />
        </div>
        <button type='button' className={styles['add-link-cta']}>
          추가하기
        </button>
      </div>
    </section>
  );
};
export default AddLink;
