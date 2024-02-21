"use client";

import { useModal } from "../../hook/useModal";
import Image from "next/image";
import shareIcon from "./share.svg";
import penIcon from "./pen.svg";
import deleteIcon from "./delete.svg";
import styles from "./index.module.css";

const FolderFunctionButtons = () => {
  const { openModal } = useModal();
  return (
    <div className={styles.div}>
      <button onClick={() => openModal("shareFolder")}>
        <Image src={shareIcon} width={18} height={19} alt="공유하기 버튼" />
        공유
      </button>
      <button onClick={() => openModal("editFolder")}>
        <Image src={penIcon} width={18} height={19} alt="수정하기 버튼" />
        이름변경
      </button>
      <button onClick={() => openModal("deleteFolder")}>
        <Image src={deleteIcon} width={18} height={19} alt="삭제하기 버튼" />
        삭제
      </button>
    </div>
  );
};
export default FolderFunctionButtons;
