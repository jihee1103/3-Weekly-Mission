"use client";

import { useModal } from "../../hook/useModal";
import Image from "next/image";
import add from "./add.svg";
import styles from "./index.module.css";

const AddFolderButton = () => {
  const { openModal } = useModal();
  return (
    <button onClick={() => openModal("addFolder")} className={styles.button}>
      <span>폴더 추가</span>
      <Image src={add} width={14} height={15} alt="폴더 추가 버튼" />
    </button>
  );
};
export default AddFolderButton;
