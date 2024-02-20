import { useState } from "react";
import ModalAddLink from "../Modal/ModalAddLink";
import styles from "./AddLinkInput.module.css";

const AddLinkInput = () => {
  const [showModalAddLink, setShowModalAddLink] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");

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
      <img
        className={styles.LinkIcon}
        src={`/assets/link.png`}
        alt="링크 아이콘"
      />
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
