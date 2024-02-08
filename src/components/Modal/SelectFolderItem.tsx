import { MouseEvent } from "react";
import styles from "./SelectFolderItem.module.css";

interface Props {
  name: string;
  count: number;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void; // 모르겠다..
}

function SelectFolderItem({ name, count, isSelected, onClick }: Props) {
  return (
    <div
      className={
        isSelected
          ? `${styles.folderItem} ${styles.selected}`
          : styles.folderItem
      }
      onClick={onClick}
    >
      <span className={styles.textContainer}>
        <span className={styles.nameText}>{name}</span>
        <span className={styles.countText}>{count}개 링크</span>
      </span>
      {isSelected && <img src="/assets/check-icon.svg" alt="check" />}
    </div>
  );
}

export default SelectFolderItem;
