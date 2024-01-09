import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../../apis/api";
import Card from "../Card/Card";
import { ALL_LINKS_ID } from "../Folder/constants";
import "./CardList.css";

function CardList({ selectedFolderId, selectedFolderName }) {
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    const handleLoadCardList = async () => {
      // console.log("selectedFolderId", selectedFolderId);
      const { data } = await getLinkDataByFolderId(selectedFolderId);
      // console.log("data", data);

      setCardList(data);
    };

    handleLoadCardList();
  }, [selectedFolderId]);

  return (
    <>
      <div className="option-bar">
        <span>{selectedFolderName}</span>
        {selectedFolderId === ALL_LINKS_ID || (
          <span className="options">
            <span className="option">
              <img src="/assets/share-icon.svg" />
              <span>공유</span>
            </span>
            <span className="option">
              <img src="/assets/pen-icon.svg" />
              <span>이름 변경</span>
            </span>
            <span className="option">
              <img src="/assets/bin-icon.svg" />
              <span>삭제</span>
            </span>
          </span>
        )}
      </div>
      <div className="card-list">
        {cardList &&
          cardList.map((link) => <Card key={link.id} link={link}></Card>)}
      </div>
    </>
  );
}
export default CardList;
