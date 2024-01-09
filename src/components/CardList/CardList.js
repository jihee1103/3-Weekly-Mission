import { useEffect, useState } from "react";
import { getLinkDataByFolderId } from "../../apis/api";
import Card from "../Card/Card";
import "./CardList.css";

function CardList({ selectedFolderId }) {
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
    <div className="card-list">
      {cardList &&
        cardList.map((link) => <Card key={link.id} link={link}></Card>)}
    </div>
  );
}
export default CardList;
