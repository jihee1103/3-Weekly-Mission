import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../../apis/api";
import Card from "./Card/Card";
import { ALL_LINKS_ID } from "../Folder/constants";
import styles from "./CardList.module.css";
import OptionBox from "./OptionBox";

function CardList({ folderData, selectedFolderId, selectedFolderName }) {
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
          <OptionBox selectedFolderName={selectedFolderName} />
        )}
      </div>
      <div className={styles.cardList}>
        {cardList.map((link) => (
          <Card key={link.id} link={link} folderData={folderData}></Card>
        ))}
      </div>
    </>
  );
}
export default CardList;
