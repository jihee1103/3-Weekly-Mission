import { useState } from "react";
import ModalAddLink from "../Modal/ModalAddLink";
import styles from "./AddLinkInput.module.css";
import Image from "next/image";
import link from "@/public/assets/link.png";

const AddLinkInput = () => {
  const [showModalAddLink, setShowModalAddLink] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleModalAddLink = () => {
    setShowModalAddLink(!showModalAddLink);
  };

  return (
    <div className={styles.addLink}>
      <input
        className={styles.addLinkInput}
        placeholder="링크를 검색해 보세요."
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <Image className={styles.LinkIcon} src={link} alt="링크 아이콘" />
      <button className={styles.addButton} onClick={handleModalAddLink}>
        추가하기
      </button>
      {showModalAddLink && (
        <ModalAddLink handleClose={handleModalAddLink} link={inputText} />
      )}
    </div>
  );
};
export default AddLinkInput;
