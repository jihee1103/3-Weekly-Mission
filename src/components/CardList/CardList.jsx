import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../../apis/api";
import Card from "./Card/Card";
import { ALL_LINKS_ID } from "../Folder/constants";
import styles from "./CardList.module.css";

function CardList({ selectedFolderId, selectedFolderName }) {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const handleLoadCardList = async () => {
      // console.log("selectedFolderId", selectedFolderId);
      const { data } = await getLinkDataByFolderId(selectedFolderId);

      setCardList(data);
    };

    handleLoadCardList();
  }, [selectedFolderId]);

  return (
    <>
      <div className={styles.optionBar}>
        <span>{selectedFolderName}</span>
        {selectedFolderId === ALL_LINKS_ID || (
          <span className={styles.options}>
            <span className={styles.option}>
              <img src="/assets/share-icon.svg" alt="share" />
              <span>공유</span>
            </span>
            <span className={styles.option}>
              <img src="/assets/pen-icon.svg" alt="pen" />
              <span>이름 변경</span>
            </span>
            <span className={styles.option}>
              <img src="/assets/bin-icon.svg" alt="bin" />
              <span>삭제</span>
            </span>
          </span>
        )}
      </div>
      <div className={styles.cardList}>
        {cardList.map((link) => (
          <Card key={link.id} link={link}></Card>
        ))}
      </div>
    </>
  );
}
export default CardList;
