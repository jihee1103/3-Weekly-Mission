import { useEffect, useState } from "react";
import { fetchFolderData } from "../apis/api";
import Card from "./Card";
import "../styles/CardList.css";

function CardList() {
  const [cardListData, setCardListData] = useState({
    folder: {
      links: [],
    },
  });

  const handleLoadCardList = async () => {
    const cards = await fetchFolderData();
    setCardListData(cards);
  };

  useEffect(() => {
    handleLoadCardList();
  }, []);

  return (
    <div className="card-list">
      <Card cardList={cardListData.folder.links}></Card>
    </div>
  );
}
export default CardList;
