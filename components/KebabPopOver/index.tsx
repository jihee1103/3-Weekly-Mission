"use client";

import { useModal } from "../../hook/useModal";
import styles from "./index.module.css";

const KebabPopOver = () => {
  const { openModal } = useModal();
  return (
    <ul className={styles.ul}>
      <li
        onClick={() => {
          openModal("deleteLink");
        }}
      >
        <span>삭제하기</span>
      </li>
      <li
        onClick={() => {
          openModal("addLink");
        }}
      >
        <span>폴더에 추가</span>
      </li>
    </ul>
  );
};
export default KebabPopOver;
