import Container from "./Container";
import styles from "./ListPage.module.css";

function ListPage({ favoriteFolder, children }) {
  return (
    <>
      <div className={styles.bg}>
        <img
          className={styles.icon}
          src={favoriteFolder?.owner.profileImageSource}
          alt="폴더 주인 아이콘"
        />
        <div className={styles.texts}>
          <p className={styles.owner}>{favoriteFolder?.owner.name}</p>
          <h1 className={styles.folderName}>{favoriteFolder?.name}</h1>
        </div>
      </div>
      <Container className={styles.container}>{children}</Container>
    </>
  );
}

export default ListPage;
