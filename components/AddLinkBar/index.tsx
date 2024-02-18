"use client";

import { useModal } from "../../hook/useModal";
import styles from "./index.module.css";

const AddLinkBar = () => {
  const { openModal } = useModal();

  return (
    <div className={styles.div}>
      <div>
        <input type="text" placeholder="링크를 추가해 보세요." />
        <button onClick={() => openModal("addLink")}>추가하기</button>
      </div>
    </div>
  );
};
export default AddLinkBar;
